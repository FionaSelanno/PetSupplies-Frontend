export class CustomerService{
    productArray = [];
    totalPrice = 0;

    addProducts(product){
    this.productArray.push(product);
    console.log(this.productArray);
    this.totalAmount();
    };

    totalAmount(){
        var totalAmount=0;
        for (let pr of this.productArray){
            totalAmount = totalAmount+ pr.price;
    }
    console.log(totalAmount);
     return this.totalPrice = totalAmount; 
  };

  products() {
    return this.productArray;
  };

  // totalProducts(){
  //   return this.productArray.length;
  // }
}