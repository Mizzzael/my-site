const path = require('path')
const compress = require('compress-images')

const pathOfBundles =
    path.join(__dirname, './assets/images/origins') +
    '/**/*.{jpg,JPG,jpeg,JPEG,png,svg,gif}'
const pathOfOutputBundles = path.join(__dirname, './assets/images') + '/'

console.log(pathOfBundles, pathOfOutputBundles)

compress(
    pathOfBundles,
    pathOfOutputBundles,
    {
        compress_force: false,
        statistic: true,
        autoupdate: true,
    },
    false,
    { jpg: { engine: 'mozjpeg', command: ['-quality', '60'] } },
    { png: { engine: 'pngquant', command: ['--quality=20-70', '-o'] } },
    { svg: { engine: 'svgo', command: '--multipass' } },
    {
        gif: {
            engine: 'gifsicle',
            command: ['--colors', '64', '--use-col=web'],
        },
    },
    (err, _, statistic) => {
        if (err) {
            throw new Error(err)
        }
        console.log(statistic)
    }
)
