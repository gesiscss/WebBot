import sys
version = sys.version_info[0]

# control for python version
if version == 2:
    from BaseHTTPServer import BaseHTTPRequestHandler, HTTPServer
elif version == 3:
    from http.server import BaseHTTPRequestHandler, HTTPServer

import simplejson

class S(BaseHTTPRequestHandler):
    def _set_headers(self):
        self.send_response(200)
        self.send_header('Content-type', 'text/html')
        self.end_headers()

    def do_GET(self):
        if self.path == "/bot/nextround":
            self._set_headers()
            f = open("bot/nextround.html", "r")
            if version == 2:
               self.wfile.write(f.read())
            elif version == 3:
               self.wfile.write(bytes(f.read(), "utf-8"))

    def do_HEAD(self):
        self._set_headers()

    def do_POST(self):
        if version == 2:
            content_len = int(self.headers.getheader('content-length'))
        elif version == 3:
            content_len = int(self.headers.get('content-length'))
        post_body = self.rfile.read(content_len)
        data = simplejson.loads(post_body)
        self.send_response(200)
        self.end_headers()

        if self.path == '/bot/getengines':
            with open('bot/engines.txt') as f:
                lines = f.read().splitlines()

        elif self.path == '/bot/getqueryterms':            
            with open('bot/queryterms.txt') as f:
                lines = f.read().splitlines()

        elif self.path == '/bot/geturllist':            
            with open('bot/urllist.txt') as f:
                lines = f.read().splitlines()


        self.wfile.write(simplejson.dumps({
            'result': [x.strip() for x in lines if x.strip() != '']
        }).encode())

def run(server_class=HTTPServer, handler_class=S, port=80):
    server_address = ('', port)
    httpd = server_class(server_address, handler_class)
    print ('Starting httpd...')
    httpd.serve_forever()

if __name__ == "__main__":
    from sys import argv

if len(argv) == 2:
    run(port=int(argv[1]))
else:
    run()
