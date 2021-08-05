export function orderedArraysEqual(a, b) {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length !== b.length) return false;

    for (var i = 0; i < a.length; ++i) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}

export function arraysEqual(a, b) {

    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length !== b.length) return false;

    // clone arrays
    const A = [...a]
    const B = [...b]
    
    A.sort()
    B.sort()

    for (var i = 0; i < A.length; ++i) {
        if (A[i] !== B[i]) return false;
    }
    return true;
}

export function capitalize([firstLetter, ...restOfWord]){
    return firstLetter.toUpperCase() + restOfWord.join('')
}

