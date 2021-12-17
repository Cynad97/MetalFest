const {series, src, dest, watch} = require('gulp'); //require importa las dependencias que instalamos con npm install
const sass = require('gulp-sass')(require('sass')); //Cuando no hay llaves es que solo hay una funcion.
const imagemin = require('gulp-imagemin');

//Funcion que compila SASS

function css (){
    return src('src/scss/app.scss')
        .pipe(sass({
            outputStyle: 'expanded'
        }))
        .pipe(dest('./build/css'))
}

function minificarcss() {
    return src('src/scss/app.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(dest('./build/css'))
}

function images() {
    return src('src/img/**/*')
        .pipe(imagemin())
        .pipe(dest('./build/img'))
}

//cada vez que hay un cambio en el archivo se ejecuta la funcion css.
function watchFiles(){
    watch('src/scss/**/*.scss',css); //* es = La carpeta actual - ** = Todos los archivos con esa extension.
}
exports.css = css;
exports.minificarcss = minificarcss;
exports.images = images;
exports.watchFiles = watchFiles;
