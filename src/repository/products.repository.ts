import { Repository, EntityRepository } from 'typeorm';
import { Products } from '../entity/products.entity';
import { ProductDto } from '../dto/products.dto';

@EntityRepository(Products)
export class ProductsRepository extends Repository<Products> {
    public async findAll(): Promise<Products[]> {
        return await this.find({});
    } 

    public async findById(productId: number): Promise<Products> {
        return await this.findById(productId);
    }

    public async createProduct(
        createProductDto: ProductDto,
    ): Promise<Products> {
        const { name, description, price } = createProductDto;
        const product = new Products();
        product.name = name;
        product.description = description;
        product.price = price;

        await this.save(product);
        return product;
    }

    public async editProduct(
        productId: number,
        updateProductDto: ProductDto,
    ): Promise<Products> {
        const { name, description, price } = updateProductDto;
        const product = await this.findById(productId);
        product.name = name;
        product.description = description;
        product.price = price;
        await this.save(product);

        return product;
    }

    public async destroy(productId: number): Promise<void> {
        const product = await this.findById(productId);
        await this.remove(product);
    } 


}