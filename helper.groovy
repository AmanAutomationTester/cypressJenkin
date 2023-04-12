import groovy.json.JsonSlurper
import groovy.io.FileType

def parseJsonToCSV() {
    echo "Under helper file aman"
    def list = []
    def dir = new File("logs")

    def jsonSlurper = new JsonSlurper()
    dir.eachFileRecurse (FileType.FILES) {
        file -> list << file
    }
    def writer = new FileWriter("D:/Automation/git/cypressJenkin/fail.csv")


    list.each {
        def config = jsonSlurper.parse(it)      
        writer.write(config.title + ";")
    }
    writer.close()
}
