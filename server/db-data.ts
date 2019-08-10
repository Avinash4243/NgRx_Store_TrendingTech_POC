
export const USERS = {
  1: {
      id: 1,
      email: 'a.aa.kumar.pandey@accenture.com',
      password:'ngrx'
  }

};


export const TECHNOLOGIES = {
    0: {
        id: 0,
        description: "Augmented Reality and Virtual Reality",
        iconUrl: 'https://www.pngfind.com/pngs/m/138-1387456_build-virtual-reality-experiences-using-react-vr-from.png',
        technologyListIcon: 'https://www.pngfind.com/pngs/m/138-1387456_build-virtual-reality-experiences-using-react-vr-from.png',
        longDescription: "Augmented reality (AR) adds digital elements to a live view often by using the camera on a smartphone. Examples of augmented reality experiences include Snapchat lenses and the game Pokemon Go. Virtual reality (VR) implies a complete immersion experience that shuts out the physical world.",
        category: 'BEGINNER',
        coursesCount: 6,
        promo:true
    },
    1: {
        id: 1,
        description: "Cloud Computing",
        iconUrl: 'https://www.freepngimg.com/thumb/cloud_computing/23914-9-cloud-computing-file.png',
        technologyListIcon: 'https://www.freepngimg.com/thumb/cloud_computing/23914-9-cloud-computing-file.png',
        longDescription: "The practice of using a network of remote servers hosted on the Internet to store, manage, and process data, rather than a local server or a personal computer.",
        category: 'BEGINNER',
        coursesCount: 10,
        promo:true
    },
    2: {
        id: 2,
        description: 'Internet of Things (IoT)',
        longDescription: "The Internet of things (IoT) is the extension of Internet connectivity into physical devices and everyday objects.",
        iconUrl: 'https://www.multicominc.com/wp-content/uploads/IoT.png',
        technologyListIcon: 'https://www.multicominc.com/wp-content/uploads/IoT.png',
        category: 'ADVANCED',
        coursesCount: 11,
        promo:false
    },
    3: {
        id: 3,
        description: 'Intelligent Apps (I – Apps)',
        longDescription: "<p class='course-description'>Intelligent apps combine and process multiple data sources – such as IoT sensors, beacons or user interactions – and turn an enormous quantity of numbers into valuable insights.",
        iconUrl: 'https://i0.wp.com/theory-y.com/wp-content/uploads/2018/01/IntelligentMobileApps-Banner.png?w=1080&ssl=1',
        technologyListIcon: 'https://i0.wp.com/theory-y.com/wp-content/uploads/2018/01/IntelligentMobileApps-Banner.png?w=1080&ssl=1',
        category: 'ADVANCED',
        coursesCount: 8,
        promo:false
    },
    4: {
        id: 4,
        description: 'Robot Process Automation',
        longDescription: "Robotic process automation is an emerging form of business process automation technology based on the notion of metaphorical software robots or artificial intelligence workers.",
        iconUrl: 'https://cdn.awsind0-fusion.fds.api.mi-img.com/b2c-i18n-bbs-in/33ce1cdbc3.png?thumb=1&w=776&h=412',
        technologyListIcon: 'https://cdn.awsind0-fusion.fds.api.mi-img.com/b2c-i18n-bbs-in/33ce1cdbc3.png?thumb=1&w=776&h=412',
        category: 'ADVANCED',
        promo:false
    },
    5: {
        id: 5,
        description: 'BIG DATA',
        longDescription: "Big data is a field that treats ways to analyze, systematically extract information from, or otherwise deal with data sets that are too large or complex to be dealt with by traditional data-processing application software.",
        iconUrl: 'https://d1jnx9ba8s6j9r.cloudfront.net/blog/wp-content/uploads/2018/06/Big-Data-Tools.png',
        technologyListIcon: 'https://d1jnx9ba8s6j9r.cloudfront.net/blog/wp-content/uploads/2018/06/Big-Data-Tools.png',
        category: 'ADVANCED',
        promo:false
    },
    6: {
        id: 6,
        description: 'Angular & React',
        longDescription: "Angular and React have many similarities and many differences. One of them is that Angular is a full-fledged MVC framework and React is merely a JavaScript Library (just the view). Let me elaborate. Angular is considered a framework because it offers strong opinions as to how your application should be structured.",
        iconUrl: 'https://blog.mgechev.com/images/react-di/angular-in-react.png',
        technologyListIcon: 'https://blog.mgechev.com/images/react-di/angular-in-react.png',
        category: 'BEGINNER',
        promo:false
    },
    7: {
        id: 7,
        description: 'DevOps',
        longDescription: "DevOps is a set of practices that automates the processes between software development and IT teams, in order that they can build, test, and release software faster and more reliably.",
        iconUrl: 'https://miro.medium.com/max/3964/1*EBXc9eJ1YRFLtkNI_djaAw.png',
        technologyListIcon: 'https://miro.medium.com/max/3964/1*EBXc9eJ1YRFLtkNI_djaAw.png',
        category: 'BEGINNER',
        promo:false
    },
    8: {
        id:8,
        description: "Angular Material",
        iconUrl: "https://s3-us-west-1.amazonaws.com/angular-university/course-images/material_design.png",
        longDescription: "Build Applications with the official Angular Widget Library",
        category: 'ADVANCED',
        promo:false
    },
};


export const LESSONS = {

    1: {
        id: 1,
        "description": "Cloud Computing Basics",
        "duration": "4:17",
        "seqNo": 1,
        technologyId: 1
    },
    2: {
        id: 2,
        "description": "AWS Certified Solutions Architect – Associate",
        "duration": "2:07",
        "seqNo": 2,
        technologyId: 1
    },
    3: {
        id: 3,
        "description": "Essential Cloud Infrastructure: Foundation",
        "duration": "2:33",
        "seqNo": 3,
        technologyId: 1
    },
    4: {
        id: 4,
        "description": "Docker Technologies",
        "duration": "4:44",
        "seqNo": 4,
        technologyId: 1
    },
    5: {
        id: 5,
        "description": " AWS Certified SysOps Administrator",
        "duration": "2:55",
        "seqNo": 5,
        technologyId: 1
    },
    6: {
        id: 6,
        "description": "ISC2 Certified Cloud Security Professional (CCSP)",
        "duration": "3:27",
        "seqNo": 6,
        technologyId: 1
    },
    7: {
        id: 7,
        "description": " Serverless Concepts",
        "duration": "9:22",
        "seqNo": 7,
        technologyId: 1
    },
    8: {
        id: 8,
        "description": " CDN, Big Data & Cloud Computing !",
        "duration": "1:26",
        "seqNo": 8,
        technologyId: 1
    },
    9: {
        id: 9,
        "description": " Architecting Microsoft Azure Solutions Certification",
        "duration": "2:08",
        "seqNo": 9,
        technologyId: 1
    },
    10: {
        id: 10,
        "description": " Google Data Engineer and Cloud Architect Guide",
        "duration": "4:01",
        "seqNo": 10,
        technologyId: 1
    },


    // Security Course
    11: {
        id: 11,
        "description": "Introduction to IoT",
        "duration": "08:19",
        "seqNo": 1,
        technologyId: 2
    },

    12: {
        id: 12,
        "description": "IoT Sensors and Devices",
        "duration": "04:17",
        "seqNo": 2,
        technologyId: 2
    },

    13: {
        id: 13,
        "description": "IoT Networks and Protocols",
        "duration": "06:05",
        "seqNo": 3,
        technologyId: 2
    },

    14: {
        id: 14,
        "description": "IoT Programming and Big Data",
        "duration": "03:57",
        "seqNo": 4,
        technologyId: 2
    },

    15: {
        id: 15,
        "description": "Cybersecurity and Privacy in IoT",
        "duration": "06:00",
        "seqNo": 5,
        technologyId: 2
    },
    16: {
        id: 16,
        "description": "IoT Capston Project",
        "duration": "04:53",
        "seqNo": 6,
        technologyId: 2
    },
    17: {
        id: 17,
        "description": "IoT Extras",
        "duration": "09:14",
        "seqNo": 7,
        technologyId: 2
    },
    18: {
        id: 18,
        "description": "IoT Currently Devices",
        "duration": "06:08",
        "seqNo": 8,
        technologyId: 2
    },
    19: {
        id: 19,
        "description": "Project 1",
        "duration": "08:50",
        "seqNo": 9,
        technologyId: 2
    },
    20: {
        id: 20,
        "description": "Project 2",
        "duration": "05:46",
        "seqNo": 10,
        technologyId: 2
    },
    21: {
        id: 21,
        "description": "Project 3",
        "duration": "06:31",
        "seqNo": 11,
        technologyId: 2
    },


    // Intelligent Apps

    22: {
        id: 22,
        "description": "Course Kick-Off - Install Node, NPM, IDE And Service Workers Section Code",
        "duration": "07:19",
        "seqNo": 1,
        technologyId: 3
    },
    23: {
        id: 23,
        "description": "Service Workers In a Nutshell - Service Worker Registration",
        "duration": "6:59",
        "seqNo": 2,
        technologyId: 3
    },
    24: {
        id: 24,
        "description": "Service Workers Hello World - Lifecycle Part 1 and PWA Chrome Dev Tools",
        "duration": "7:28",
        "seqNo": 3,
        technologyId: 3
    },
    25: {
        id: 25,
        "description": "Service Workers and Application Versioning - Install & Activate Lifecycle Phases",
        "duration": "10:17",
        "seqNo": 4,
        technologyId: 3
    },

    26: {
        id: 26,
        "description": "Downloading The Offline Page - The Service Worker Installation Phase",
        "duration": "09:50",
        "seqNo": 5,
        technologyId: 3
    },
    27: {
        id: 27,
        "description": "Introduction to the Cache Storage PWA API",
        "duration": "04:44",
        "seqNo": 6,
        technologyId: 3
    },
    28: {
        id: 28,
        "description": "View Service Workers HTTP Interception Features In Action",
        "duration": "06:07",
        "seqNo": 7,
        technologyId: 3
    },
    29: {
        id: 29,
        "description": "Service Workers Error Handling - Serving The Offline Page",
        "duration": "5:38",
        "seqNo": 8,
        technologyId: 3
    },
    30: {
        id: 30,
        "description": "Introduction to Virtual Reality",
        "duration": "6:53",
        "seqNo": 1,
        technologyId: 0

    },
    31: {
        id: 31,
        "description": "3D Models for Virtual Reality",
        "duration": "5:52",
        "seqNo": 2,
        technologyId: 0
    },
    32: {
        id: 32,
        "description": "3D Interaction Design for Virtual Reality",
        "duration": "8:17",
        "seqNo": 3,
        technologyId: 0
    },
    33: {
        id: 33,
        "description": "Making your First Virtual Reality Game",
        "duration": "7:47",
        "seqNo": 4,
        technologyId: 0
    },
    34: {
        id: 34,
        "description": "Introduction to Augmented Reality and ARCore",
        "duration": "9:22",
        "seqNo": 5,
        technologyId: 0
    },
    35: {
        id: 35,
        "description": "Introduction to XR: VR, AR and MR Foundations",
        "duration": "7:07",
        "seqNo": 6,
        technologyId: 0
    },
    36: {
        id: 35,
        "description": "Introduction to Angular and React",
        "duration": "7:07",
        "seqNo": 1,
        technologyId: 6
    },
    37: {
        id: 35,
        "description": "Difference b/w Angular and React",
        "duration": "7:07",
        "seqNo": 2,
        technologyId: 6
    }

};

export function findTechnologyById(technologyId:number) {
    return TECHNOLOGIES[technologyId];
}

export function findLessonsForCourse(technologyId:number) {
    return Object.values(LESSONS).filter(lesson => lesson.technologyId == technologyId);
}


export function authenticate(email:string, password:string) {

    const user:any = Object.values(USERS).find(user => user.email === email);

    if (user && user.password == password) {
        return user;
    }
    else {
        return undefined;
    }

}
