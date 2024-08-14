module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        
        less: {
            development: {
                files:{
                    'dev/styles/main.css': 'source/styles/main.less'
                },
            }
        },
        watch: {
            files: ['source/styles/main.less'],
            tasks: ['less:development'],
        },
        uglify: {
            target:{
                files: {
                    'dev/scripts/main.min.js': 'source/scripts/main.js'
                }
            }
        }
})
        grunt.loadNpmTasks('grunt-contrib-less');
        grunt.loadNpmTasks('grunt-contrib-watch');
        grunt.loadNpmTasks('grunt-contrib-uglify');
        grunt.loadNpmTasks('grunt-concurrent');
        grunt.loadNpmTasks('grunt-replace');
        grunt.registerTask('default', ['watch']);
        grunt.registerTask('build', ['uglify:target', 'less:development']);
}

