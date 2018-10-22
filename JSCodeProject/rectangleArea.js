var computeArea = function(A, B, C, D, E, F, G, H) {
    var area = (C-A)*(D-B) + (G-E)*(H-F);
    
    if((A > G || C < E) || (D < F || B > H)) {
        return area;
    }
    
    var left = Math.max(A,E);
    var top = Math.min(D,H);
    var right = Math.min(C,G);
    var bottom = Math.max(B,F);
    
    return area - (right - left)*(top - bottom);
};

var A = -3, B = 0, C = 3, D = 4, E = 0, F = -1, G = 9, H = 2;

console.log(computeArea(A, B, C, D, E, F, G, H));