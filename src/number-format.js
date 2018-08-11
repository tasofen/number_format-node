(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if(typeof module === "object" && typeof module.exports === "object") {
        module.exports = factory();
    } else {
        root.number_format = factory();
    }
}(this, function () {
    return function (number, decimals, dec_point, thousands_sep) {
        decimals = decimals || 0;
        dec_point = dec_point || ".";
        thousands_sep = thousands_sep || ",";

        if (typeof number !== "number") {
            number = parseFloat(number);
        }

        var neg = number<0 ? "-" : "";
        number = Math.abs(number);

        if (decimals == 0) {
            return neg+thousands(Math.round(number), thousands_sep);
        }

        var nodes = (""+number).split(".");
        if (nodes.length == 1) {
            nodes.push("");
        }

        nodes[1] = roundDecimal(nodes[1], decimals);

        if (nodes[1].length > decimals) {
            nodes[0] = parseInt(nodes[0])+1;
            nodes[1] = nodes[1].substr(1);
        }

        nodes[0] = thousands(nodes[0], thousands_sep);

        if (decimals) {
            return neg + nodes.join(dec_point);
        } else {
            return neg + nodes[0];
        }

    }

    function thousands(num, del) {
        num += "";
        var nodes = [];

        while (num.length > 3) {
            nodes.unshift(num.substr(num.length-3));
            num = num.substr(0, num.length-3);
        }

        if (num.length) {
            nodes.unshift(num);
        }

        return nodes.join(del);
    }

    function roundDecimal(dec, decimals) {
        dec += "";
        var nodes = dec.split("");

        if (nodes.length > decimals) {
            nodes = nodes.splice(0, decimals+1)

            var round = 0,
            nodeVal;

            for (var i=nodes.length-1; i>=0; --i) {
                nodeVal = parseInt(nodes[i]);

                if (nodes.length-1 == i && nodeVal >= 5) {
                    round = 1;
                    continue;
                }

                if (round + nodeVal == 10) {
                    nodes[i] = 0;
                } else {
                    nodes[i] = nodeVal+1;
                    round = 0;
                    break;
                }

            }

            if (round) {
                nodes.unshift(1);
            }

            nodes.pop();
        } else {
            while(nodes.length < decimals) {
                nodes.push(0);
            }
        }

        return nodes.join("");
    }
}));