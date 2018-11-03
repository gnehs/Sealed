(function(f, a, d, h) {
    var g = (function() {
        var i = f.getComputedStyle,
            k, j, l = '';
        if (i) {
            k = i(a.documentElement, '');
            k = Array.prototype.join.call(k, '');
            j = k.match(/-(?:O|Moz|webkit|ms)-/i);
            if (j) { l = j[0] }
        }
        return l
    })();
    var c = {};
    (function(i) {
        var n = (f.requestAnimationFrame || f.mozRequestAnimationFrame || f.webkitRequestAnimationFrame || f.msRequestAnimationFrame || setTimeout).bind(f);
        var m = (f.cancelAnimationFrame || f.mozcancelAnimationFrame || f.webkitcancelAnimationFrame || f.mscancelAnimationFrame || clearTimeout).bind(f);
        var k = {};
        var l = 0;
        var o = -1;

        function j(u, t) {
            function s(v) {
                if (k[u].playing) {
                    t(v + k[u].iShift);
                    if (!k[u]) { return }
                    k[u].frameId = n(s);
                    k[u].lastTime = v
                }
            }
            return s
        }
        i.setRender = function q(u, s) {
            var t = l,
                u;
            s = s || 0;
            l++;
            k[t] = { frameId: 0, playing: true, thread: u, lastTime: 0, shift: s, iShift: s - (Date.now() - o) };
            u = j(t, u);
            n(u);
            return t
        };
        i.clearRender = function r(s) {
            if (k[s] !== h) {
                if (k[s].playing) { m(k[s].frameId) }
                k[s] = h;
                return true
            } else { return false }
        };
        i._init = function p() {
            function t() {
                function u(v) { o = Date.now() - v }
                return u
            }
            var s = t();
            n(s)
        };
        i._init()
    }(c));
    var b = a.getElementsByTagName(d)[0],
        e = a.createElement(d);
    e.innerHTML = '.negi{position:fixed;top:0;left:0;z-index:99999;' + g + 'transform-origin:50% 50%;transform-origin:50% 50%;' + g + 'transform-style:preserve-3d;transform-style:preserve-3d;' + g + 'perspective:2000px;perspective:2000px;';
    if (b === h) {
        b = a.getElementsByTagName('head')[0];
        b.appendChild(e)
    } else { if (b.parentNode.lastChild == b) { b.parentNode.appendChild(e) } else { b.parentNode.insertBefore(e, b.nextSibling) } }
    f.Negi = (function() {
        function i() {
            var m = a.documentElement,
                k = a.body,
                l = f.innerWidth || m.clientWidth || k.clientWidth,
                j = f.innerHeight || m.clientHeight || k.clientHeight;
            this.__instance = a.createElement('img');
            this.__instance.setAttribute('class', 'negi');
            this.setInlineCSS(this.__instance, { left: Math.random() * l + 'px', top: '-10px' });
            this.__speed = 0;
            this.__max_height = j + 30;
            this.__run_times = 0;
            this.__render_id = -1;
            this.__fibo = [2, 3, 5, 8, 13, 21, 34, 55, 89]
        }
        i.prototype.start = function() {
            this.__instance.src = 'https://gnehs.github.io/Sealed/negi/img/negi' + (Math.ceil(Math.random() * 6)) + '.png';
            a.getElementsByTagName('body')[0].appendChild(this.__instance);
            var k = this,
                j = function(m) {
                    var p, o, t, s = 0,
                        r = 0,
                        q, n;
                    k.__run_times++;
                    for (o = 0, t = k.__fibo.length; o < t; o++) { p = k.__fibo[o]; if (k.__run_times % p === 0) { k.__speed += Math.random() - 0.5 } }
                    n = k.getInlineCSS(k.__instance);
                    if (n.hasOwnProperty('left')) { s = parseFloat(n.left) }
                    if (k.__run_times > 200 || r >= k.__max_height) {
                        a.getElementsByTagName('body')[0].removeChild(k.__instance);
                        c.clearRender(k.__intervalID);
                        return false
                    }
                    s += k.__speed > 0 ? Math.abs(k.__speed) : Math.abs(k.__speed) * -1;
                    r = m * 0.25;
                    q = 1 + m * 0.001;
                    q = q > 2 ? 2 : q;
                    var l = {};
                    l[g + 'transform'] = 'rotateZ(' + m + 'deg) scale(' + q + ')';
                    l.transform = 'rotateZ(' + m + 'deg) scale(' + q + ')';
                    l.left = s + 'px';
                    l.top = r + 'px';
                    k.setInlineCSS(k.__instance, l)
                };
            this.__intervalID = c.setRender(j)
        };
        i.prototype.getInlineCSS = function(j) {
            if (j.__style) { return j.__style }
            var k = j.getAttribute('style') || '';
            var m = /([^:\s]+)\s*:\s*([^;]+)/g;
            var l = {};
            k.replace(m, function(n, o, p) { l[o] = p.trim() });
            j.__style = l;
            return l
        };
        i.prototype.setInlineCSS = function(l, m) {
            var j = this.getInlineCSS(l),
                n = [],
                k;
            for (k in m) { if (m.hasOwnProperty(k)) { j[k] = m[k] } }
            for (k in j) { if (j.hasOwnProperty(k)) { n.push(k + ': ' + j[k]) } }
            l.setAttribute('style', n.join('; '))
        };
        return i
    })();
    setInterval(function() {
        (new Negi()).start()
    }, 500)
})(this, this.document, 'style')