# Palin

## About

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

* [@lauramwillis](https://github.com/lauramwillis) for taking my butchered app
  icon and making it round and beautiful.
* Jethro Clunies-Ross for his suggestion to make the dots in the menu bar
  smaller.

***

## Generate `.icns`

```
iconutil -c icns palin.iconset
```
