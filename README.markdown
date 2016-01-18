# Palin

## About

![Palin screen shot](https://c2.staticflickr.com/2/1690/24001417140_7aee37c07f_o.png)

Palin is an app for your menu bar that shows a green dot when you have an
internet connection, or a red dot if you don't have an internet connection.

## Develop

```
git clone https://github.com/rey/palin.git ~/palin
cd ~/palin && npm run start
```

## Build

```
git clone https://github.com/rey/palin.git ~/palin
cd ~/palin && npm run build
open  ~/palin/_build
```

## Credits

* [Jethro Clunies-Ross](http://jethro247.tumblr.com/archive) for his suggestion
  to make the dots in the menu bar smaller.
* [@lauramwillis](https://github.com/lauramwillis) for taking my butchered app
  icon and making it round and beautiful.
* [@johnbillion](https://github.com/johnbillion) for sanity checking my
  JavaScript.

## Changelog

### 0.2.5

* No longer show the app icon in the dock

### 0.2.4

* Consistent use of double quotes (sorry @johnbillion)
* New icon images (thanks @lauramwillis)

### 0.2.3

* Retina tray icons

### 0.2.2

* Tidying up
* Add tooltips depending on state

### 0.2.0

* Tidying up
* Restructure project

### 0.1.0

* First!

***

## Generate `.icns`

```
iconutil -c icns palin.iconset
```
