var merge = function (nums1, m, nums2, n) {
  let len1 = m - 1;
  let len2 = n - 1;
  let plen = m + n - 1;

  while (len1 > 0 && len2 > 0) {
    if (nums1[len1] > nums2[len2]) {
      nums1[plen] = nums1[len1];
      len1--;
    } else {
      nums1[plen] = nums2[len2];
      len2--;
    }
    plen--;
  }

  while (plen > 0 && len1 > 0) {
    nums1[plen] = nums1[len1];
    plen--;
    len1--;
  }

  while (plen > 0 && len2 > 0) {
    nums1[plen] = nums2[len2];
    plen--;
    len2--;
  }
  return nums1;
};
var nums1 = [1, 2, 3];
var m = 3;
var nums2 = [2, 5, 6];
var n = 3;

console.log(merge(nums1, m, nums2, n));
