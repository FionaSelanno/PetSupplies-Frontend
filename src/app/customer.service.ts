
export class CustomerService{
    productArray = [];
    totalPrice = 0;

    addedProducts(product){
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
    this.totalPrice = totalAmount; 
  };

  totalProducts(){
    return this.productArray.length;
  }
}