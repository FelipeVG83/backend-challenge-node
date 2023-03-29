const { productUseCase } = require("../../../src/useCases/Product");

describe("creating a new product", () => {
    const productWithoutName = {
        name: '',
        active: true
    }

    test('should return error missing name information', async () => {
        await expect(productUseCase.create(productWithoutName)).rejects.toThrowError('Name information is missing.');
    })
})