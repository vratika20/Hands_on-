public class Main {

    public static void main(String[] args) {

        Product[] products = {
                new Product(101, "Laptop", "Electronics"),
                new Product(102, "Mobile", "Electronics"),
                new Product(103, "Shoes", "Fashion"),
                new Product(104, "Watch", "Accessories"),
                new Product(105, "Bag", "Fashion")
        };

        Product p1 = SearchAlgorithms.linearSearch(products, 103);

        if (p1 != null)
            System.out.println("Linear Search Found: " + p1.productName);

        Product p2 = SearchAlgorithms.binarySearch(products, 104);

        if (p2 != null)
            System.out.println("Binary Search Found: " + p2.productName);
    }
}