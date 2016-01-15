var bio = {
    "name": "Kaisa Martiskainen",
    "role": "Web developer",
    "contacts": {
        "mobile": "555-555-5555",
        "email": "eevakaisab@gmail.com",
        "github": "silvermagicships",
        "twitter": "@notwitter",
        "location": "Montreal, CA"
    },
    "welcomeMessage": "This resume is powered by CSS, HTML, JavaScript and jQuery. Enjoy!",
    "skills": ["HTML", "CSS", "JS", "Graphic Design"],
    "bioPic": "images/dino.png"
};

bio.display = function() {

    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);
    var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

    $("#header").prepend(formattedName, formattedRole);
    $("#header").append(formattedPic, formattedWelcomeMessage);
    $("#topContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedTwitter, formattedLocation);
    var formattedFooter = formattedMobile + formattedEmail + formattedTwitter + formattedGithub;
    $("#footerContacts").append(formattedFooter);


    if (bio.skills) {
        $("#header").append(HTMLskillsStart);
        for (var i = 0; i < (bio.skills.length); i++) {
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
            $("#skills").append(formattedSkill);
        }
    }
};

bio.display();



var education = {
    "schools": [{
        "name": "Glasgow University",
        "location": "Glasgow, UK",
        "degree": "Master of Arts",
        "majors": ["Film & TV studies"],
        "dates": 2010,
        "url": "www.gla.ac.uk"
    }, {
        "name": "Concordia University",
        "location": "Montréal, QC",
        "degree": "Bachelor of Arts",
        "majors": ["French Literature"],
        "dates": 2013,
        "url": "www.concordia.ca"
    }, {
        "name": "Concordia University",
        "location": "Montréal, QC",
        "degree": "Diploma in Graphic Applications",
        "majors": ["Illustration"],
        "dates": 2014,
        "url": "www.concordia.ca"
    }],
    "onlineCourses": [{
        "title": "JavaScript Syntax - Udacity",
        "school": "Udacity",
        "dates": 2015,
        "url": "www.udacity.com"
    }]
};

education.display = function() {



    $("#education").append(HTMLschoolStart);
    for (school in education.schools) {
        var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
        $(".education-entry:last").append(formattedName);
        $(".education-entry:last").append(formattedLocation);
        $(".education-entry:last").append(formattedDates);
        $(".education-entry:last").append(formattedMajor);

    }

    $("#education").append(HTMLonlineClasses);
    $("#education").append(HTMLschoolStart);
    for (onCourse in education.onlineCourses) {
        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onCourse].title);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onCourse].school);
        var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onCourse].dates);
        var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onCourse].url);
        $(".education-entry:last").append(formattedOnlineTitle);
        $(".education-entry:last").append(formattedOnlineDates);
        $(".education-entry:last").append(formattedOnlineURL);
    }
};

education.display();



var work = {
    "jobs": [{
        "employer": "Tilivery",
        "title": "Marketing Analyst",
        "location": "Montréal, QC",
        "dates": "June 2015 - Present",
        "description": "Marketing, market analysis and web development at an early stage delivery"
    }, {
        "employer": "Busbud",
        "title": "Community Manager",
        "location": "Montréal, QC",
        "dates": "December 2014 - May 2015",
        "description": "Managing the social media assets and email marketing activities at a bus travel startup"
    }, {
        "employer": "Ludia",
        "title": "Community Specialist",
        "location": "Montréal, QC",
        "dates": "October 2014 - December 2014",
        "description": "Managing and developing content for several social game communities at a video game company"

    }]
};


work.display = function() {

    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedEmployerTitle);
        $(".work-entry:last").append(formattedLocation);
        $(".work-entry:last").append(formattedDates);
        $(".work-entry:last").append(formattedDescription);
    }
}

work.display();



var projects = {
    "projects": [{
        "title": "Coffee - A Story about Addiction",
        "dates": "2014",
        "description": "This is my first project. It was fuelled by dozens of flat whites, london smogs, macchiatos, soy lattes and espressos.",
        "images": [
            "images/coffee-small.png"
        ]
    }
  ]
}

projects.display = function() {
    for (project in projects.projects) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedTitle);
        $(".project-entry:last").append(formattedDates);
        $(".project-entry:last").append(formattedDescription);

        if (projects.projects[project].images.length > 0) {
            for (image in projects.projects[project].images) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedImage);
            }
        }

    }
};

projects.display();


$("#mapDiv").append(googleMap);
