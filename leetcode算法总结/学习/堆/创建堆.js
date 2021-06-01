// 1、插入式建堆
function insert(key) {
    items.push(key);
    let i = items.length - 1;
    while (i > 0 && items[i] > items[i/2]) {
        swap(items,i,i/2);
        i = i/2;
    }
}

function swap(items,i,j) {
    let temp = items[i];
    items[i] = items[j];
    items[j] = temp;
}


// 2.原地建堆 (堆化)
