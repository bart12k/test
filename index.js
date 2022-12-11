require('events').EventEmitter.defaultMaxListeners = Infinity;



var http = require('http');
var url = require('url');
const fs = require("fs");

var proxy = ['socks5://127.0.0.1:9053',
'socks5://127.0.0.1:9050',
'',
'socks5://127.0.0.1:9052',
'socks5://127.0.0.1:9054',
'socks5://127.0.0.1:9055',
'socks5://127.0.0.1:9056',
'socks5://127.0.0.1:9057',
'socks5://127.0.0.1:9058'
]
//test 