var http = require('http');
var url = require('url');
var requestlp=require('request-ip');
var moment = require('moment');
var qu=require('querystring');
require('moment-timezone');
moment.tz.setDefault("Asia/Seoul");
http.createServer(function(req,res){
        var date = moment().format('YYYY-MM-DD HH:mm:ss');
        var uri = req.url;
        var query = url.parse(uri, true).query;
        var ip = req.headers['x-forwarded-for'] ||  req.connection.remoteAddress;
        if (ip.substr(0, 7) == "::ffff:") {
                ip = ip.substr(7)
        }
        if(req.method == 'GET') {
                res.writeHead(200, {"Content-type": "text/html"});
                query.ip=ip;
                query.time=date;
                query.email='ohchunghak@gmail.com';
                query.stuno='20161612';
                o = JSON.stringify(query);
                res.end(o);
        } else if(req.method =='POST'){
                var jsondata='';
                var post={};
                req.on('data',function(dat){
                        jsondata=jsondata+dat;
                        res.writeHead(200, {"Content-type": "text/html"});
                });
                req.on('end',function(){
                        post=JSON.parse(jsondata);
                        post.ip=ip;
                        post.time=date;
                        post.email='ohchunghak@gmail.com';
                        post.stuno='20161612';
                        o=JSON.stringify(post);
                        res.end(o);
                });
        }
}).listen(8000,function(){
        console.log('server running on 8000.');
});
