const intersect = (nums1, nums2) => {
  nums1.sort((a,b)=> a-b);
  nums2.sort((a,b)=> a-b);
  const res = [];
  var p1 = 0;
  var p2 = 0;
  while(p1 < nums1.length && p2 < nums2.length){
    if(nums1[p1] < nums2[p2]){
      p1++;
    }else if(nums1[p1] > nums[p2]){
      p2++;
    }
    else{
      res.push(nums1[p1]);
      p1++;
      p2++;
    }
  }
  return res

}

nums1.sort((a, b) => a - b);
nums2.sort((a, b) => a - b); // 先排序，使得重复的元素相邻出现
const res = [];
let p1 = 0;                  // 两个指针
let p2 = 0;
while (p1 < nums1.length && p2 < nums2.length) { // 用&& 因为有一个越界了就不能找交集
  if (nums1[p1] > nums2[p2]) {        // p1指向的数大，移动p2，期待遇到一样大的
    p2++;
  } else if (nums1[p1] < nums2[p2]) { // 类似
    p1++;
  } else {                   // 遇到相同的，推入res数组，两个指针同时移动考察下一个
    res.push(nums1[p1]);
    p1++;
    p2++;
  }
}
return res;

