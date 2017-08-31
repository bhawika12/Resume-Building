//bio object
var bio = {
    "name": "BHAWIKA SHARMA",
    "role": "Web Designer",
    "contacts": {
        "mobile": "9041756200",
        "email": "bhaawika.bhawi12@gmail.com",
        "location": "Panchkula,Haryana",
        "github": "Bhaawika.12"
    },
    "welcomeMessage": "An individual's personality is the sum total of the person's qualities, characteristics, attitudes and quirks",
    "skills": ["Drawing","Abstract Making","Dancing","Cooking"],
    "biopic": "images/picture.JPG"
};

 //work object
var work = {
    "jobs": [{
        "employer": "Chitkara University",
        "title": "Executive at Bits and Bytes",
        "dates": "2017",
        "location": "Chitkara university",
        "description": "Dreams and Dedication are a Powerful Combination"
    }]
};


//project object
var project = {
    "project": [{
            "title": "Project2:Human VS Machine",
            "dates": "30 May,2017",
            "description": "completed given task using HTML",
            "images": ["images/1.png"]
        },
        {
            "title": "Project3:Animal Card",
            "dates": "2 June,2017",
            "description": "Used HTML and CSS",
            "images": ["images/2.png"]
        },
        {
            "title": "Project4:Portfolio",
            "dates": "3 June,2017",
            "description": "Featured work shown",
            "images": ["images/3.png","images/4.png"]//array of images
        }
    ]
};


var education = {
    "schools": [{
            "name": "Manav Mangal School",
            "location": "Panchkula,Haryana,India",
            "degree": "Middle School",
            "majors": ["Drawing,Biology and History"],
            "dates": "April,2012",
        },
                {
            "name":"GMSSS-19c",
            "location":"Chandigarh",
            "degree":"High School",
            "majors":["Chemistry,English"],
            "dates":"April,2014",
        },
        {
            "name": "Chitkara University,Punjab",
            "location": "Rajpura,Punjab",
            "degree": "BE",
            "majors": ["CST,OPERATING SYSTEM,COMPUTER NETWORKING"],
            "dates": "2015-present"
        }

    ],
    "onlineCourses": [{
            "title": "Front-End Developer Nanodegree",
            "school": "Udacity",
            "dates": "June,2017",
            "url": "https://in.udacity.com/",
        },
        {
        	"title": "CCNA",
            "school": "Cybrary",
            "dates": "December,2016-Present",
            "url": "https://www.cybrary.it/",
        }
    ]
};


bio.display = function() {
    $("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
    $("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
    $("#header").append(HTMLbioPic.replace("%data%", bio.biopic));
    $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
    $("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
    $("#footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
    $("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
    $("#footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
    $("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
    $("#footerContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
    $("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
    $("#footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
    $("#header").append(HTMLskillsStart);

    for (var i = 0; i < bio.skills.length; i++) {
       $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
    }
};
bio.display();



work.display=function() {
        $("#workExperience").append(HTMLworkStart);
        for (i=0;i<work.jobs.length;i++) {
            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
            var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
            var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
            var formattedDatesWorked = HTMLworkDates.replace("%data%", work.jobs[i].dates);
            var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
            var formattedEmployerWorkTitle = formattedEmployer + formattedWorkTitle;
            $(".work-entry:last").append(formattedEmployerWorkTitle);
            $(".work-entry:last").append(formattedWorkLocation);
            $(".work-entry:last").append(formattedDatesWorked);
            $(".work-entry:last").append(formattedWorkDescription);
        }
};
work.display();


project.display = function() {
        for (i=0;i<project.project.length;i++) {
            $("#projects").append(HTMLprojectStart);
            var formattedProjectTitle = HTMLprojectTitle.replace("%data%", project.project[i].title).replace("#", project.project[i].url);
            var formattedProjectDates = HTMLprojectDates.replace("%data%", project.project[i].dates);
            var formattedProjectDescription = HTMLprojectDescription.replace("%data%", project.project[i].description);
            $(".project-entry:last").append(formattedProjectTitle);
            $(".project-entry:last").append(formattedProjectDates);
            $(".project-entry:last").append(formattedProjectDescription);
            for (var a=0;a <project.project[i].images.length;a++) {
               $(".project-entry:last").append(HTMLprojectImage.replace("%data%", project.project[i].images[a]));
            }
        }
};
project.display();

education.display =     function() {
    for (var j = 0; j < education.schools.length; j++) {
        $("#education").append(HTMLschoolStart);
        $(".education-entry:last").append(HTMLschoolName.replace("%data%", education.schools[j].name)); 
        $(".education-entry:last").append(HTMLschoolDegree.replace("%data%", education.schools[j].degree));
        $(".education-entry:last").append(HTMLschoolLocation.replace("%data%", education.schools[j].location));
        $(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[j].dates));
        $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[j].majors));
    }

    $("#education").append(HTMLonlineClasses);
    for
    (
        var x = 0; x < education.onlineCourses.length; x++) {
        $("#education").append(HTMLschoolStart);
        $(".education-entry:last").append(HTMLonlineTitle.replace("%data%", education.onlineCourses[x].title));
        $(".education-entry:last").append(HTMLonlineSchool.replace("%data%", education.onlineCourses[x].school));
        $(".education-entry:last").append(HTMLonlineDates.replace("%data%", education.onlineCourses[x].dates));
        $(".education-entry:last").append(HTMLonlineURL.replace("%data%", education.onlineCourses[x].url));
    }
};

education.display();
//map 
$("#mapDiv").append(googleMap);