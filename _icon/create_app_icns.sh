mkdir palin.iconset
sips -z 16 16     palin_1024.png --out palin.iconset/icon_16x16.png
sips -z 32 32     palin_1024.png --out palin.iconset/icon_16x16@2x.png
sips -z 32 32     palin_1024.png --out palin.iconset/icon_32x32.png
sips -z 64 64     palin_1024.png --out palin.iconset/icon_32x32@2x.png
sips -z 128 128   palin_1024.png --out palin.iconset/icon_128x128.png
sips -z 256 256   palin_1024.png --out palin.iconset/icon_128x128@2x.png
sips -z 256 256   palin_1024.png --out palin.iconset/icon_256x256.png
sips -z 512 512   palin_1024.png --out palin.iconset/icon_256x256@2x.png
sips -z 512 512   palin_1024.png --out palin.iconset/icon_512x512.png
cp palin_1024.png palin.iconset/icon_512x512@2x.png
iconutil -c icns palin.iconset
rm -R palin.iconset
