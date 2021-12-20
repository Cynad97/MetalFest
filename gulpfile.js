const {series, src, dest, watch, parallel} = require('gulp'); //require importa las dependencias que instalamos con npm install
const sass = require('gulp-sass')(require('sass')); //Cuando no hay llaves es que solo hay una funcion.
const imagemin = require('gulp-imagemin');
const notify = require('gulp-notify');
const webp = require('gulp-webp');
const concat = require('gulp-concat');

//Utilidades CSS
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const sourcemaps = require('gulp-sourcemaps')

//Utilidades JS
const terser = require('gulp-terser-js')


//Funcion que compila SASS

const paths = {
    imagesPath: 'src/img/**/*',
    scss: 'src/scss/**/*.scss',
    js: 'src/js/**/*.js'
}

function css (){
    return src(paths.scss)
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(postcss([autoprefixer(), cssnano() ]))
        .pipe(sourcemaps.write('.'))
        .pipe(dest('./build/css'))
}

function javaScript () {
    return src(paths.js)
        .pipe(concat('bundle.js'))
        .pipe(terser())
        .pipe(dest('./build/js'))
}

function images() {
    return src(paths.imagesPath)
        .pipe(imagemin())
        .pipe(dest('./build/img'))
        //.pipe(notify({message: 'Image/s minified'}));
}

function versionWebp() {
    return src(paths.imagesPath)
        .pipe(webp())
        .pipe(dest('./build/img'))
        //.pipe(notify({message:'Version webP Ready'}));
}

//cada vez que hay un cambio en el archivo se ejecuta la funcion css.
function watchFiles(){
    watch(paths.scss,css); //* es = La carpeta actual - ** = Todos los archivos con esa extension.
    watch(paths.js, javaScript);
}

exports.css = css;
exports.images = images;
exports.watchFiles = watchFiles;

exports.default = series(css, javaScript, images, versionWebp, watchFiles);
