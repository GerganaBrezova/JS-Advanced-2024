import { assert } from "chai"
import { motorcycleRider } from "./chooseYourCar.js"

describe('Tests Motorcycle Rider', function () {
    describe('LicenseRestriction', function () {
        testString("AM", "Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16.");
        testString("A1", "Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16.");
        testString("A2", "Motorcycles with maximum power of 35KW. and the minimum age is 18.");
        testString("A", "No motorcycle restrictions, and the minimum age is 24.");

        it('throws an error if invalid string type', function () {
            assert.throw(() => motorcycleRider.licenseRestriction("Wrong type", "Invalid Information!"));
        });
    });

    describe('MotorcycleShowroom', function () {
        it('test if 1 element is returned from the array', function () {
            assert.equal(motorcycleRider.motorcycleShowroom([100], 150), "There are 1 available motorcycles matching your criteria!");
        });
        it('test if all elements are returned from the array', function () {
            assert.equal(motorcycleRider.motorcycleShowroom([100, 130, 90, 110], 150), "There are 4 available motorcycles matching your criteria!");
        });
        it('test if all matching elements are returned from the array', function () {
            assert.equal(motorcycleRider.motorcycleShowroom([100, 160, 50, 120], 150), "There are 3 available motorcycles matching your criteria!");
        });

        it('throws an error if invalid engineVolume (non-array)', function () {
            assert.throw(() => motorcycleRider.motorcycleShowroom("100", 150), "Invalid Information!");
        });
        it('throws an error if invalid maximumEngineVolume (non-number)', function () {
            assert.throw(() => motorcycleRider.motorcycleShowroom([100, 200], "150"), "Invalid Information!");
        });

        it('throws an error if empty engineVolume', function () {
            assert.throw(() => motorcycleRider.motorcycleShowroom([], 150), "Invalid Information!");
        });
        it('throws an error if maximumEngineVolume is less than 50', function () {
            assert.throw(() => motorcycleRider.motorcycleShowroom([100, 200], 40), "Invalid Information!");
        });

    });

    describe('OtherSpendings', function () {
        it('returns the rigth price with a discount', function () {
            assert.equal(motorcycleRider.otherSpendings(["helmet", "jacked"], ["engine oil", "oil filter"], true), "You spend $540.00 for equipment and consumables with 10% discount!");
        });
        it('returns the rigth price without a discount', function () {
            assert.equal(motorcycleRider.otherSpendings(["helmet", "jacked"], ["engine oil", "oil filter"], false), "You spend $600.00 for equipment and consumables!");
        });

        it('throws an error if equipment is not an array', function () {
            assert.throw(() => motorcycleRider.otherSpendings("helmet", ["engine oil", "oil filter"], true), "Invalid Information!");
        });
        it('throws an error if consumables is not an array', function () {
            assert.throw(() => motorcycleRider.otherSpendings(["helmet", "jacked"], "engine oil", false), "Invalid Information!");
        });
        it('throws an error if discount is not a boolean', function () {
            assert.throw(() => motorcycleRider.otherSpendings(["helmet", "jacked"], ["engine oil", "oil filter"], "false"), "Invalid Information!");
        });
    });
});

function testString(string, text) {
    it('test if the rigth text is returned', function () {
        assert.equal(motorcycleRider.licenseRestriction(string), text);
    });
}

