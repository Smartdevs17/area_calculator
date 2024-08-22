// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

 contract AreaCalculator {
    function calculateTriangle(uint _base, uint _height) public pure returns (uint) {
        return (_base * _height) / 2;
    }
    
    function calculateRectangle(uint _length, uint _width) public pure returns (uint) {
        return _length * _width;
    }
    
    function calculateSquare(uint _side) public pure returns (uint) {
        return _side * _side;
    }
}