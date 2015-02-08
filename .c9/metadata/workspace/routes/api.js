{"filter":false,"title":"api.js","tooltip":"/routes/api.js","undoManager":{"mark":67,"position":67,"stack":[[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":0,"column":1},"action":"insert","lines":["m"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":1},"end":{"row":0,"column":2},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":2},"end":{"row":0,"column":3},"action":"insert","lines":["d"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":3},"end":{"row":0,"column":4},"action":"insert","lines":["u"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":4},"end":{"row":0,"column":5},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":5},"end":{"row":0,"column":6},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":6},"end":{"row":0,"column":7},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":7},"end":{"row":0,"column":8},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":8},"end":{"row":0,"column":9},"action":"insert","lines":["x"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":9},"end":{"row":0,"column":10},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":9},"end":{"row":0,"column":10},"action":"remove","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":9},"end":{"row":0,"column":10},"action":"insert","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":10},"end":{"row":0,"column":11},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":11},"end":{"row":0,"column":12},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":12},"end":{"row":0,"column":13},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":13},"end":{"row":0,"column":14},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":14},"end":{"row":0,"column":15},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":15},"end":{"row":0,"column":16},"action":"insert","lines":["="]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":16},"end":{"row":0,"column":17},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":17},"end":{"row":0,"column":18},"action":"insert","lines":["f"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":18},"end":{"row":0,"column":19},"action":"insert","lines":["u"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":19},"end":{"row":0,"column":20},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":20},"end":{"row":0,"column":21},"action":"insert","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":21},"end":{"row":0,"column":22},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":22},"end":{"row":0,"column":23},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":23},"end":{"row":0,"column":24},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":24},"end":{"row":0,"column":25},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":25},"end":{"row":0,"column":26},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":26},"end":{"row":0,"column":28},"action":"insert","lines":["()"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":27},"end":{"row":0,"column":28},"action":"insert","lines":["m"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":28},"end":{"row":0,"column":29},"action":"insert","lines":["y"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":29},"end":{"row":0,"column":30},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":29},"end":{"row":0,"column":30},"action":"remove","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":29},"end":{"row":0,"column":30},"action":"insert","lines":["A"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":30},"end":{"row":0,"column":31},"action":"insert","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":31},"end":{"row":0,"column":32},"action":"insert","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":25},"end":{"row":0,"column":26},"action":"remove","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":32},"end":{"row":0,"column":33},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":33},"end":{"row":0,"column":34},"action":"insert","lines":["{"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":34},"end":{"row":2,"column":1},"action":"insert","lines":["","    ","}"]}]}],[{"group":"doc","deltas":[{"start":{"row":1,"column":4},"end":{"row":45,"column":3},"action":"insert","lines":["var getRandomInt = function(min, max) {","        return Math.floor(Math.random() * (max - min + 1)) + min;","}","","router.get('/getUserScore', function(req, res){","    var db = req.db;","    db.collection('score').findOne({name: req.query.name}, function(err, result) {","        console.log(err);","        console.log(result);","        res.send(result);","    });","});","","router.get('/getQuestion', function(req, res){","    var db = req.db;","    var i = getRandomInt(0,43);","    db.collection('questions').findOne({_id: i}, function(err, result) {","        res.send(result);","    });","});","","router.post('/postScore', function(req, res) {","    var db = req.db;","    db.collection('score').update(","        {name: req.body.name.trim().toLowerCase()}, {","            $inc: {","            totalScore: req.body.currentScore","            }","        }, {","            upsert:true,safe:false","        },","        function(err,data){","            res.send(","                (err === null) ? { msg: '' } : { msg: err }","            );","        }","    );","});","","router.get('/getHighScore', function(req, res) {","    var db = req.db;","    db.collection('score').find({},{limit:10, sort: [['totalScore',-1]]}).toArray(function(err, results){","        res.send(results);","    });","});"]}]}],[{"group":"doc","deltas":[{"start":{"row":1,"column":4},"end":{"row":3,"column":1},"action":"remove","lines":["var getRandomInt = function(min, max) {","        return Math.floor(Math.random() * (max - min + 1)) + min;","}"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":1,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":1,"column":0},"end":{"row":2,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":0},"end":{"row":3,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":2,"column":1},"action":"insert","lines":["var getRandomInt = function(min, max) {","        return Math.floor(Math.random() * (max - min + 1)) + min;","}"]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":1},"end":{"row":3,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":1,"column":4},"end":{"row":1,"column":8},"action":"remove","lines":["    "]},{"start":{"row":5,"column":0},"end":{"row":7,"column":0},"action":"insert","lines":["","",""]},{"start":{"row":7,"column":4},"end":{"row":9,"column":0},"action":"remove","lines":["","",""]},{"start":{"row":7,"column":50},"end":{"row":7,"column":51},"action":"insert","lines":[" "]},{"start":{"row":8,"column":0},"end":{"row":8,"column":4},"action":"insert","lines":["    "]},{"start":{"row":9,"column":4},"end":{"row":9,"column":8},"action":"insert","lines":["    "]},{"start":{"row":9,"column":40},"end":{"row":10,"column":12},"action":"insert","lines":["","            "]},{"start":{"row":10,"column":32},"end":{"row":11,"column":8},"action":"insert","lines":["","        "]},{"start":{"row":12,"column":8},"end":{"row":12,"column":12},"action":"insert","lines":["    "]},{"start":{"row":13,"column":0},"end":{"row":13,"column":2},"action":"insert","lines":["  "]},{"start":{"row":13,"column":10},"end":{"row":13,"column":12},"action":"insert","lines":["  "]},{"start":{"row":14,"column":0},"end":{"row":14,"column":4},"action":"insert","lines":["    "]},{"start":{"row":15,"column":4},"end":{"row":15,"column":8},"action":"insert","lines":["    "]},{"start":{"row":16,"column":0},"end":{"row":16,"column":4},"action":"insert","lines":["    "]},{"start":{"row":18,"column":0},"end":{"row":18,"column":4},"action":"insert","lines":["    "]},{"start":{"row":18,"column":49},"end":{"row":18,"column":50},"action":"insert","lines":[" "]},{"start":{"row":19,"column":4},"end":{"row":19,"column":8},"action":"insert","lines":["    "]},{"start":{"row":20,"column":0},"end":{"row":20,"column":2},"action":"insert","lines":["  "]},{"start":{"row":20,"column":6},"end":{"row":20,"column":8},"action":"insert","lines":["  "]},{"start":{"row":20,"column":31},"end":{"row":20,"column":32},"action":"insert","lines":[" "]},{"start":{"row":21,"column":0},"end":{"row":21,"column":3},"action":"insert","lines":["   "]},{"start":{"row":21,"column":7},"end":{"row":21,"column":8},"action":"insert","lines":[" "]},{"start":{"row":21,"column":44},"end":{"row":22,"column":12},"action":"insert","lines":["","            "]},{"start":{"row":22,"column":18},"end":{"row":23,"column":8},"action":"insert","lines":["","        "]},{"start":{"row":24,"column":0},"end":{"row":24,"column":2},"action":"insert","lines":["  "]},{"start":{"row":24,"column":10},"end":{"row":24,"column":12},"action":"insert","lines":["  "]},{"start":{"row":25,"column":4},"end":{"row":25,"column":8},"action":"insert","lines":["    "]},{"start":{"row":26,"column":0},"end":{"row":26,"column":4},"action":"insert","lines":["    "]},{"start":{"row":28,"column":0},"end":{"row":28,"column":4},"action":"insert","lines":["    "]},{"start":{"row":29,"column":4},"end":{"row":29,"column":8},"action":"insert","lines":["    "]},{"start":{"row":30,"column":0},"end":{"row":30,"column":2},"action":"insert","lines":["  "]},{"start":{"row":30,"column":6},"end":{"row":30,"column":8},"action":"insert","lines":["  "]},{"start":{"row":30,"column":38},"end":{"row":30,"column":39},"action":"insert","lines":["{"]},{"start":{"row":31,"column":0},"end":{"row":31,"column":3},"action":"insert","lines":["   "]},{"start":{"row":31,"column":11},"end":{"row":31,"column":12},"action":"remove","lines":["{"]},{"start":{"row":31,"column":11},"end":{"row":31,"column":16},"action":"insert","lines":["     "]},{"start":{"row":31,"column":56},"end":{"row":32,"column":12},"action":"insert","lines":["","            "]},{"start":{"row":33,"column":0},"end":{"row":33,"column":4},"action":"insert","lines":["    "]},{"start":{"row":34,"column":0},"end":{"row":34,"column":2},"action":"insert","lines":["  "]},{"start":{"row":34,"column":14},"end":{"row":34,"column":20},"action":"insert","lines":["      "]},{"start":{"row":35,"column":12},"end":{"row":35,"column":16},"action":"insert","lines":["    "]},{"start":{"row":36,"column":0},"end":{"row":36,"column":3},"action":"insert","lines":["   "]},{"start":{"row":36,"column":11},"end":{"row":36,"column":12},"action":"insert","lines":[" "]},{"start":{"row":37,"column":0},"end":{"row":37,"column":4},"action":"insert","lines":["    "]},{"start":{"row":37,"column":23},"end":{"row":37,"column":24},"action":"insert","lines":[" "]},{"start":{"row":37,"column":29},"end":{"row":38,"column":16},"action":"insert","lines":["","                "]},{"start":{"row":38,"column":21},"end":{"row":38,"column":22},"action":"insert","lines":[" "]},{"start":{"row":39,"column":0},"end":{"row":39,"column":1},"action":"insert","lines":[" "]},{"start":{"row":39,"column":9},"end":{"row":39,"column":12},"action":"insert","lines":["   "]},{"start":{"row":40,"column":0},"end":{"row":40,"column":3},"action":"insert","lines":["   "]},{"start":{"row":40,"column":11},"end":{"row":40,"column":12},"action":"insert","lines":[" "]},{"start":{"row":40,"column":25},"end":{"row":40,"column":26},"action":"insert","lines":[" "]},{"start":{"row":40,"column":31},"end":{"row":40,"column":32},"action":"insert","lines":[" "]},{"start":{"row":41,"column":0},"end":{"row":41,"column":3},"action":"insert","lines":["   "]},{"start":{"row":41,"column":15},"end":{"row":41,"column":16},"action":"insert","lines":[" "]},{"start":{"row":42,"column":0},"end":{"row":42,"column":4},"action":"insert","lines":["    "]},{"start":{"row":42,"column":38},"end":{"row":43,"column":23},"action":"insert","lines":["","                       "]},{"start":{"row":43,"column":31},"end":{"row":44,"column":19},"action":"insert","lines":["","                   "]},{"start":{"row":44,"column":25},"end":{"row":45,"column":23},"action":"insert","lines":["","                       "]},{"start":{"row":45,"column":32},"end":{"row":46,"column":19},"action":"insert","lines":["","                   "]},{"start":{"row":47,"column":0},"end":{"row":47,"column":4},"action":"insert","lines":["    "]},{"start":{"row":48,"column":0},"end":{"row":48,"column":4},"action":"insert","lines":["    "]},{"start":{"row":49,"column":4},"end":{"row":49,"column":8},"action":"insert","lines":["    "]},{"start":{"row":50,"column":0},"end":{"row":50,"column":4},"action":"insert","lines":["    "]},{"start":{"row":52,"column":0},"end":{"row":52,"column":4},"action":"insert","lines":["    "]},{"start":{"row":53,"column":0},"end":{"row":53,"column":1},"action":"insert","lines":[" "]},{"start":{"row":53,"column":5},"end":{"row":53,"column":8},"action":"insert","lines":["   "]},{"start":{"row":54,"column":0},"end":{"row":54,"column":4},"action":"insert","lines":["    "]},{"start":{"row":54,"column":39},"end":{"row":54,"column":40},"action":"insert","lines":[" "]},{"start":{"row":54,"column":41},"end":{"row":55,"column":12},"action":"insert","lines":["","            "]},{"start":{"row":55,"column":18},"end":{"row":55,"column":19},"action":"insert","lines":[" "]},{"start":{"row":55,"column":22},"end":{"row":56,"column":11},"action":"insert","lines":["","           "]},{"start":{"row":56,"column":19},"end":{"row":57,"column":16},"action":"insert","lines":["","                "]},{"start":{"row":57,"column":30},"end":{"row":57,"column":31},"action":"insert","lines":[" "]},{"start":{"row":57,"column":34},"end":{"row":58,"column":12},"action":"insert","lines":["","            "]},{"start":{"row":58,"column":13},"end":{"row":59,"column":8},"action":"insert","lines":["","        "]},{"start":{"row":59,"column":41},"end":{"row":59,"column":42},"action":"insert","lines":[" "]},{"start":{"row":60,"column":8},"end":{"row":60,"column":12},"action":"insert","lines":["    "]},{"start":{"row":61,"column":4},"end":{"row":61,"column":8},"action":"insert","lines":["    "]},{"start":{"row":62,"column":0},"end":{"row":62,"column":4},"action":"insert","lines":["    "]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":4},"end":{"row":7,"column":10},"action":"remove","lines":["router"]},{"start":{"row":7,"column":4},"end":{"row":7,"column":5},"action":"insert","lines":["m"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":5},"end":{"row":7,"column":6},"action":"insert","lines":["y"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":6},"end":{"row":7,"column":7},"action":"insert","lines":["A"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":7},"end":{"row":7,"column":8},"action":"insert","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":7,"column":8},"end":{"row":7,"column":9},"action":"insert","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":18,"column":4},"end":{"row":18,"column":10},"action":"remove","lines":["router"]},{"start":{"row":18,"column":4},"end":{"row":18,"column":5},"action":"insert","lines":["m"]}]}],[{"group":"doc","deltas":[{"start":{"row":18,"column":5},"end":{"row":18,"column":6},"action":"insert","lines":["y"]}]}],[{"group":"doc","deltas":[{"start":{"row":18,"column":6},"end":{"row":18,"column":7},"action":"insert","lines":["A"]}]}],[{"group":"doc","deltas":[{"start":{"row":18,"column":7},"end":{"row":18,"column":8},"action":"insert","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":18,"column":8},"end":{"row":18,"column":9},"action":"insert","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":28,"column":4},"end":{"row":28,"column":10},"action":"remove","lines":["router"]},{"start":{"row":28,"column":4},"end":{"row":28,"column":5},"action":"insert","lines":["m"]}]}],[{"group":"doc","deltas":[{"start":{"row":28,"column":5},"end":{"row":28,"column":6},"action":"insert","lines":["y"]}]}],[{"group":"doc","deltas":[{"start":{"row":28,"column":6},"end":{"row":28,"column":7},"action":"insert","lines":["A"]}]}],[{"group":"doc","deltas":[{"start":{"row":28,"column":7},"end":{"row":28,"column":8},"action":"insert","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":28,"column":8},"end":{"row":28,"column":9},"action":"insert","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":52,"column":4},"end":{"row":52,"column":10},"action":"remove","lines":["router"]},{"start":{"row":52,"column":4},"end":{"row":52,"column":5},"action":"insert","lines":["m"]}]}],[{"group":"doc","deltas":[{"start":{"row":52,"column":5},"end":{"row":52,"column":6},"action":"insert","lines":["y"]}]}],[{"group":"doc","deltas":[{"start":{"row":52,"column":6},"end":{"row":52,"column":7},"action":"insert","lines":["A"]}]}],[{"group":"doc","deltas":[{"start":{"row":52,"column":7},"end":{"row":52,"column":8},"action":"insert","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":52,"column":8},"end":{"row":52,"column":9},"action":"insert","lines":["p"]}]}]]},"ace":{"folds":[],"scrolltop":2,"scrollleft":0,"selection":{"start":{"row":0,"column":0},"end":{"row":0,"column":0},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1422962685000,"hash":"b0795724ea1f8cbd855be2ee123f0b318c4cec59"}