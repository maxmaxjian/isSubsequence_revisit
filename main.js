
class solution {
    isSubseq(s, t) {
        /*
        var i = 0, j = 0
        while (i < s.length) {
            j = t.indexOf(s.charAt(i),j)
            if (j != -1)
                i++
            else
                break
        }
        if (i == s.length)
            return true
        return false
        */

        var dict = new Map()
        for (var i = 0; i < t.length; i++) {
            if (!dict.has(t.charAt(i)))
                dict.set(t.charAt(i),[]);
            dict.get(t.charAt(i)).push(i);
        }
        console.log(dict)

        var vec = []
        for (var i = 0; i < s.length; i++) {
            if (dict.has(s.charAt(i)))
                vec.push(dict.get(s.charAt(i)))
            else
                vec.push([])
        }
        console.log(vec)
        var exist = this.hasIncr(vec)
        return exist
    }

    hasIncr(vec) {
        var result = new Array()
        /*
        function largerThan(v, rtn) {
            if (rtn.length == 0)
                return v[0]
            else {
                for (var i = 0; i < v.length; i++)
                    if (v[i] > rtn[rtn.length-1])
                        return v[i]
                return -1
            }
        }
        vec.forEach(result.push(largerThan(result)))
        */
        for (var i = 0; i < vec.length; i++) {
            if (result.length == 0)
                result.push(vec[i][0])
            else {
                for (var j = 0; j < vec[i].length; j++) {
                    if (vec[i][j] > result[result.length-1]) {
                        result.push(vec[i][j])
                        break
                    }
                }
                if (j == vec[i].length)
                    result.push(-1)
            }
        }
        console.log(result)

        for (var i = 1; i < result.length; i++) {
            if (result[i] <= result[i-1])
                return false
        }
        return true
    }
}

var s = "axc", t = "ahbbgcdxdc"
var soln = new solution()
var isSubseq = soln.isSubseq(s, t)
console.log(isSubseq)
