# NgxMenu

![Test](https://github.com/2YY/ngx-menu/workflows/Test/badge.svg)
[![Maintainability](https://api.codeclimate.com/v1/badges/8855ddde0fd5e70ca6a4/maintainability)](https://codeclimate.com/github/2YY/ngx-menu/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/8855ddde0fd5e70ca6a4/test_coverage)](https://codeclimate.com/github/2YY/ngx-menu/test_coverage)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.1.

## Installation

`npm i 2yy-ngx-menu`

## Motivation

- Use [FocusKeyManager]() with your own styles. (Fully customizable)

## Usage

1. Wrap your menu items with `lib-ngx-menu`.
2. Add `libNgxMenuItem` directive to your menu items.

### Example

    <lib-ngx-menu>
      <button #button1 libNgxMenuItem (focusReceived)="lastFocusedButtonNumber = 1">Button 1</button>
      <button libNgxMenuItem (focusReceived)="lastFocusedButtonNumber = 2">Button 2</button>
      <button libNgxMenuItem (focusReceived)="lastFocusedButtonNumber = 3">Button 3</button>
      <button libNgxMenuItem (focusReceived)="lastFocusedButtonNumber = 4">Button 4</button>
      <button libNgxMenuItem (focusReceived)="lastFocusedButtonNumber = 5">Button 5</button>
    </lib-ngx-menu>

Your can customize there buttons style freely.

## License

[MIT License](./LICENSE)
