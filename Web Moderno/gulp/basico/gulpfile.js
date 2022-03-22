const gulp = require("gulp");
const { parallel } = require("gulp");
const series = gulp.series;

const antes1 = (cb) => {
  console.log("tarefa antes1!");
  return cb();
};

const antes2 = (cb) => {
  console.log("tarefa antes2!");
  return cb();
};

function copiar(cb) {
  gulp
    .src(["pastaA/arquivo1.txt", "pastaA/arquivo2.txt"])
    .pipe(gulp.dest("pastaB"));
  return cb();
}

const fim = (cb) => {
  console.log("tarefa fim!");
  return cb();
};

module.exports.default = series(parallel(antes1, antes2), copiar, fim);
