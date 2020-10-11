function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

const sum_node = root => {
    console.log(root);
    let sum = 0;
    if (typeof root.val === 'number' && typeof root.left ) {
        sum += root.val;
    }
    // if (typeof root.val !== 'undefined' && (typeof root.left !== 'undefined' || typeof root.right !== 'undefined')) {
    //     sum += root.val;
    //     sum += sum_node(root.left);
    //     sum += sum_node(root.right);
    // }
    // return sum;
}

const solution = root => {
    console.log(sum_node(root));
}
function is_node_sum(root) {
    if (typeof root === 'object' && typeof root.val === 'number') {
        return typeof root.left == 'object' || typeof root.right == 'object';
    }
    return false;
}
solution({val: 8, left: {val: 27, left: { val: 28 , left: 10, right: 7}, right: null}, right: null });