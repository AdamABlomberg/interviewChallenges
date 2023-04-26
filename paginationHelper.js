class PaginationHelper {
	constructor(collection, itemsPerPage) {
	// The constructor takes in an array of items and a integer indicating how many
	// items fit within a single page
    this.collection = collection;
    this.itemsPerPage = itemsPerPage
	}
	itemCount() {
	// returns the number of items within the entire collection
    return this.collection.length;
	}
	pageCount() {
	// returns the number of pages
    return Math.ceil(this.collection.length/this.itemsPerPage);
	}
	pageItemCount(pageIndex) {
	// returns the number of items on the current page. page_index is zero based.
	// this method should return -1 for pageIndex values that are out of range
    if(pageIndex > this.pageCount() - 1 || !pageIndex) {
      return -1;
    } else if(pageIndex < this.pageCount() - 1) {
      return this.itemsPerPage;
    } else {
      return this.itemCount()%this.itemsPerPage;
    }
	}
	pageIndex(itemIndex) {
	// determines what page an item is on. Zero based indexes
	// this method should return -1 for itemIndex values that are out of range
    if(itemIndex > this.itemCount() || itemIndex < 0 || !this.itemCount()) {
      return -1;
    } else {
      return Math.floor(itemIndex / this.itemsPerPage);
    }
	}
}

var collection = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
var helper = new PaginationHelper(collection, 10)

// console.log(helper.pageCount());
// console.log(helper.itemCount());
// console.log(helper.pageItemCount(1));
// console.log(helper.pageItemCount(2));
// console.log(helper.pageItemCount(3));
// console.log(helper.pageItemCount(-1));
// console.log(helper.pageIndex(-1));
// console.log(helper.pageIndex(2));
// console.log(helper.pageIndex(0));

collection = []
helper = new PaginationHelper(collection, 10)

// console.log(helper.pageCount());
// console.log(helper.itemCount());
// console.log(helper.pageItemCount(1));
// console.log(helper.pageItemCount(2));
// console.log(helper.pageItemCount(3));
// console.log(helper.pageItemCount(-1));
// console.log(helper.pageIndex(-1));
// console.log(helper.pageIndex(2));
console.log(helper.pageIndex(0));