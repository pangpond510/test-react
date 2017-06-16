import biopic from './images/fry.jpg';
import projpic1 from './images/197x148.gif';
 
var bio = {
	"name" : "Norawit Hempornwisarn",
	"role" : "Trainee",
	"welcomeMessage" : "Hello wolrd!",
	"biopic" : biopic,
	"contacts" : {
		"email" : "pangpond.32552@gmail.com",
		"mobile" : "0970255131",
		"github" : "pangpond510",
		"location" : "20/45, Bang Ramat, Taling Chan, Bangkok, 10170, Thailand"
	},
	"skills" : ["Programming", "Sport", "Music"]
};

var work = {
	"jobs" : [
		{
			"employer" : "Skooldio",
			"title" : "Trainee",
			"location" : "Soi Chulalongkorn 64, Pathum Wan, Bangkok, 10330, Thailand",
			"dates" : "in progress",
            "url" : "https://www.skooldio.com/",
			"description" : "Internship program  Internship program Internship program Internship program Internship program Internship program Internship program Internship program Internship program Internship program Internship program Internship program Internship program Internship program Internship program Internship program Internship program Internship program Internship program Internship program Internship program Internship program Internship program Internship program Internship program Internship program Internship program Internship program Internship program Internship program Internship program Internship program Internship program"
		},
        {
			"employer" : "Skooldio",
			"title" : "Trainee",
			"location" : "Soi Chulalongkorn 64, Pathum Wan, Bangkok, 10330, Thailand",
			"dates" : "in progress",
            "url" : "https://www.skooldio.com/",
			"description" : "Internship program  Internship program Internship program Internship program Internship program Internship program Internship program Internship program Internship program Internship program Internship program Internship program Internship program Internship program Internship program Internship program Internship program Internship program Internship program Internship program Internship program Internship program Internship program Internship program Internship program Internship program Internship program Internship program Internship program Internship program Internship program Internship program Internship program"
		}
	]
};

var projects = {
	"projects" : [
		{
			"title" : "Block Breaker Game",
			"dates" : "Year 2 Semester 1",
            "url" : "https://github.com/pangpond510/test-react",
			"description" : "ProgMeth project ProgMeth project ProgMeth project ProgMeth project ProgMeth project ProgMeth project ProgMeth project ProgMeth project ProgMeth project ProgMeth project ProgMeth project ProgMeth project ProgMeth project ProgMeth project ProgMeth project ProgMeth project ProgMeth project ProgMeth project ProgMeth project ProgMeth project ProgMeth project ProgMeth project ProgMeth project ProgMeth project ProgMeth project ProgMeth project ProgMeth project ProgMeth project ProgMeth project ProgMeth project ProgMeth project ProgMeth project ProgMeth project ProgMeth project ProgMeth project ProgMeth project ProgMeth project",
			"images" : [projpic1, projpic1]
		},
        {
			"title" : "Block Breaker Game",
			"dates" : "Year 2 Semester 1",
            "url" : "https://github.com/pangpond510/test-react",
			"description" : "ProgMeth project ProgMeth project ProgMeth project ProgMeth project ProgMeth project ProgMeth project ProgMeth project ProgMeth project ProgMeth project ProgMeth project ProgMeth project ProgMeth project ProgMeth project ProgMeth project ProgMeth project ProgMeth project ProgMeth project ProgMeth project ProgMeth project ProgMeth project ProgMeth project ProgMeth project ProgMeth project ProgMeth project ProgMeth project ProgMeth project ProgMeth project ProgMeth project ProgMeth project ProgMeth project ProgMeth project ProgMeth project ProgMeth project ProgMeth project ProgMeth project ProgMeth project ProgMeth project",
			"images" : [projpic1, projpic1]
		}
	]
};

var education = {
	"schools" : [
		{
			"name" : "Suankularb Wittayalai School",
			"location" : "88 Tri Phet Rd, Khwaeng Wang Burapha Phirom, Khet Phra Nakhon, Krung Thep Maha Nakhon 10200",
			"degree" : "Secondary school",
			"dates" : "6 years",
			"url" : "http://www.sk.ac.th",
			"majors" : ["GATE program"]
		},
		{
			"name" : "Chulalongkorn University",
			"location" : "254 Phayathai Rd, Wang Mai, Khet Pathum Wan, Krung Thep Maha Nakhon 10330",
			"degree" : "Bachelor's degree",
			"dates" : "in progress",
			"url" : "https://www.reg.chula.ac.th",
			"majors" : ["Computer Engineering"]
		}
	],
	"onlineCourse" : []
};

export default {
    work : work,
    projects : projects,
    bio : bio,
    education : education,
};