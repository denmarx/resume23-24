/* global monogatari */

// Define the messages used in the game.
monogatari.action('message').messages({
  Help: {
    title: 'Help',
    subtitle: 'Some useful Links',
    body: `
			<p><a href='https://developers.monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p>
			<p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>
		`,
  },
});

// Define the notifications used in the game
monogatari.action('notification').notifications({
  Welcome: {
    title: 'Welcome',
    body: 'This is the Monogatari VN Engine',
    icon: '',
  },
});

// Define the Particles JS Configurations used in the game
monogatari.action('particles').particles({});

// Define the canvas objects used in the game
monogatari.action('canvas').objects({});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration('credits', {
  Developers: {
    'Concept and Code': 'Dennis Marx',
    'Scenarios and Text': 'Marco Mann & Dennis Marx',
  },
  'Special Thanks to': {
    '': 'Julian Brandt',
  },
});

// Define the images that will be available on your game's image gallery
monogatari.assets('gallery', {});

// Define the music used in the game.
monogatari.assets('music', {
  title: 'title.mp3',
});

// Define the voice files used in the game.
monogatari.assets('voices', {});

// Define the sounds used in the game.
monogatari.assets('sounds', {});

// Define the videos used in the game.
monogatari.assets('videos', {});

// Define the images used in the game.
monogatari.assets('images', {
  img1: 'img1.jpg',
});

// Define the backgrounds for each scene.
monogatari.assets('scenes', {
  'art-room': 'art-room.jpg',
  'anime-jungle': 'anime-jungle.jpg',
  'big-city': 'big-city.jpg',
  'car-shop': 'car-shop.jpg',
  'ceo-office': 'ceo-office.jpeg',
  'city-plaza': 'city-plaza.jpg',
  'city-sunset': 'city-sunset.jpg',
  'college-graduation': 'college-graduation.jpg',
  'common-suburb': 'common-suburb.jpg',
  'dark-room': 'dark-room.jpg',
  'empty-classroom': 'empty-classroom.jpg',
  'high-school': 'high-school.jpg',
  img1: 'img1.jpg',
  'jap-room': 'jap-room.jpg',
  'lab-office': 'lab-office.jpg',
  'lecture-hall': 'lecture-hall.jpg',
  'math-classroom': 'math-classroom.jpg',
  'messy-office': 'messy-office.jpg',
  'money-rain': 'money-rain.jpg',
  'multi-office': 'multi-office.png',
  'modern-library': 'modern-library.jpg',
  'outside-campus': 'outside-campus.jpg',
  'party-room': 'party-room.jpg',
  'pc-homeoffice': 'pc-homeoffice.jpg',
  'prof-office': 'prof-office.jpg',
  'school-building': 'school-building.jpg',
  'school-corridor': 'school-corridor.jpg',
  'science-lab': 'science-lab.jpg',
  'small-office': 'small-office.jpg',
  'smooth-beach': 'smooth-beach.jpg',
  'sunset-beach': 'sunset-beach.jpg',
  'tech-office': 'tech-office.jpg',
  'work-room': 'work-room.jpg',
});

// Define the Characters
monogatari.characters({
  y: {
    name: 'Erzähler',
    color: '#5bcaff',
    sprites: {
      erzähler: '08.png',
    },
  },
  player: {
    color: 'red',
    name: '{{player.name}}',
    sprites: {
      painter: 'guy_painter.svg',
      photographer: 'guy_photographer.svg',
    },
  },

  a: {
    name: 'Investment Banker in einem Investmentunternehmen - Ende 1',
    color: '#A9C4EB',
  },
  b: {
    name: 'Manager in einem Großkonzern - Ende 2',
    color: '#A9C4EB',
  },
  c: {
    name: 'Gründer eines Unternehmens im Bereich Klimatechnologie - Ende 3',
    color: '#A9C4EB',
  },
  d: {
    name: 'Gamedesigner - Ende 4',
    color: '#A9C4EB',
  },
  e: {
    name: 'Freischaffender Künstler - Ende 5',
    color: '#A9C4EB',
  },
  f: {
    name: 'Wissenschaftlicher Mitarbeiter - Ende 6',
    color: '#A9C4EB',
  },
  g: {
    name: 'Gründer einer gemeinnützigen Organisation - Ende 7',
    color: '#A9C4EB',
  },
  h: {
    name: 'Ingenieur in einem großen Konzern - Ende 8',
    color: '#A9C4EB',
  },
  i: {
    name: 'Bauingenieur in einem Familienbetrieb - Ende 9',
    color: '#A9C4EB',
  },
  j: {
    name: 'Mitarbeiter in einer Non-Profit Organisation - Ende 10',
    color: '#a9c4eb',
  },
  k: {
    name: 'KFZ-Mechatroniker - Ende 11',
    color: '#a9c4eb',
  },
  l: {
    name: 'Gründung eines Meisterbetriebs - Ende 12',
    color: '#a9c4eb',
  },
  m: {
    name: 'Netzwerk- und Systemadministrator - Ende 13',
    color: '#a9c4eb',
  },
});

// Custom functions
function saveSexMale() {
  monogatari.storage().player.sex = 'Male';
  monogatari.storage().player.perpro = 'er';
  monogatari.storage().player.PerPro = 'Er';
  monogatari.storage().player.perproakk = 'ihn';
  monogatari.storage().player.perprodat = 'ihm';
  monogatari.storage().player.posproma = 'sein';
  monogatari.storage().player.posprofe = 'seine';
  monogatari.storage().player.pospromaakk = 'seinen';
  monogatari.storage().player.posprofeakk = 'seine';
  monogatari.storage().player.posprogen = 'seines';
  monogatari.storage().player.PosProMa = 'Sein';
  monogatari.storage().player.PosProFe = 'Seine';
  monogatari.storage().player.posprodatma = 'seinem';
  monogatari.storage().player.posprodatfe = 'seiner';
}

function saveSexFemale() {
  monogatari.storage().player.sex = 'Female';
  monogatari.storage().player.perpro = 'sie';
  monogatari.storage().player.PerPro = 'Sie';
  monogatari.storage().player.perproakk = 'sie';
  monogatari.storage().player.perprodat = 'ihr';
  monogatari.storage().player.posproma = 'ihr';
  monogatari.storage().player.posprofe = 'ihre';
  monogatari.storage().player.pospromaakk = 'ihren';
  monogatari.storage().player.posprofeakk = 'ihre';
  monogatari.storage().player.posprogen = 'ihres';
  monogatari.storage().player.PosProMa = 'Ihr';
  monogatari.storage().player.PosProFe = 'Ihre';
  monogatari.storage().player.posprodatma = 'ihrem';
  monogatari.storage().player.posprodatfe = 'ihrer';
}

function saveSexDiverse() {
  monogatari.storage().player.sex = 'Diverse';
  monogatari.storage().player.perpro = 'er/sie';
  monogatari.storage().player.PerPro = 'Er/Sie';
  monogatari.storage().player.perproakk = 'ihn/sie';
  monogatari.storage().player.perprodat = 'ihm/ihr';
  monogatari.storage().player.posproma = 'sein/ihr';
  monogatari.storage().player.posprofe = 'seine/ihre';
  monogatari.storage().player.pospromaakk = 'seinen/ihren';
  monogatari.storage().player.posprofeakk = 'seine/ihre';
  monogatari.storage().player.posprogen = 'seines/ihres';
  monogatari.storage().player.PosProMa = 'Sein/Ihr';
  monogatari.storage().player.PosProFe = 'Seine/Ihre';
  monogatari.storage().player.posprodatma = 'seinem/ihrem';
  monogatari.storage().player.posprodatfe = 'seiner/ihrer';
}

function delWeiterbildungRot() {
  monogatari.storage().weiterbildungRot.shift();
}

function saveRedChoice() {
  monogatari.storage().weiterbildungRot.push(1);
}

function delWeiterbildungBlau() {
  monogatari.storage().weiterbildungBlau.shift();
}

function saveBlueChoice() {
  monogatari.storage().weiterbildungBlau.push(1);
}

function delPersonalRot() {
  monogatari.storage().personalRot.shift();
}

function saveStudyPersonalChoiceRed() {
  monogatari.storage().personalRot.push(1);
}

function delPersonalBlau() {
  monogatari.storage().personalBlau.shift();
}

function saveStudyPersonalChoiceBlue() {
  monogatari.storage().personalBlau.push(1);
}

function delConundrumRot() {
  monogatari.storage().conundrumRot.shift();
}

function saveConundrumChoiceRed() {
  monogatari.storage().conundrumRot.push(1);
}

function delAconundrumChoiceRed() {
  monogatari.storage().aconundrumRot.shift();
}

function saveAconundrumChoiceRed() {
  monogatari.storage().aconundrumRot.push(1);
}

function delAconundrumChoiceBlue() {
  monogatari.storage().aconundrumBlau.shift();
}

function saveAconundrumChoiceBlue() {
  monogatari.storage().aconundrumBlau.push(1);
}

function delConundrumBlau() {
  monogatari.storage().conundrumBlau.shift();
}

function saveConundrumChoiceBlue() {
  monogatari.storage().conundrumBlau.push(1);
}

function delCon1Win() {
  monogatari.storage().con1Win.shift();
}

function con1Win() {
  monogatari.storage().con1Win.push(1);
}

function delCon1Fail() {
  monogatari.storage().con1Fail.shift();
}

function con1Fail() {
  monogatari.storage().con1Fail.push(1);
}

function delCon2Win() {
  monogatari.storage().con2Win.shift();
}

function con2Win() {
  monogatari.storage().con2Win.push(1);
}

function delCon2Fail() {
  monogatari.storage().con2Fail.shift();
}

function con2Fail() {
  monogatari.storage().con2Fail.push(1);
}

function delCon3Win() {
  monogatari.storage().con3Win.shift();
}

function con3Win() {
  monogatari.storage().con3Win.push(1);
}

function delCon3Fail() {
  monogatari.storage().con3Fail.shift();
}

function con3Fail() {
  monogatari.storage().con3Fail.push(1);
}

function delAcon1Win() {
  monogatari.storage().acon1Win.shift();
}

function acon1Win() {
  monogatari.storage().acon1Win.push(1);
}

function delAcon1Fail() {
  monogatari.storage().acon1Fail.shift();
}

function acon1Fail() {
  monogatari.storage().acon1Fail.push(1);
}

function delAcon2Win() {
  monogatari.storage().acon2Win.shift();
}

function acon2Win() {
  monogatari.storage().acon2Win.push(1);
}

function delAcon2Fail() {
  monogatari.storage().acon2Fail.shift();
}

function acon2Fail() {
  monogatari.storage().acon2Fail.push(1);
}

function delAcon3Win() {
  monogatari.storage().acon2Win.shift();
}

function acon3Win() {
  monogatari.storage().acon3Win.push(1);
}

function delAcon3Fail() {
  monogatari.storage().acon3Fail.shift();
}

function acon3Fail() {
  monogatari.storage().acon3Fail.push(1);
}

// function restart () {
// 	const gameScreen = document.querySelector('game-screen').element();

// 	// Add our title
// 	gameScreen.prepend ('<choice-container classes="true" class="animated" data-component="choice-container"><div data-content="wrapper"><button data-do="jump Start" data-choice="restart">Nochmal von vorn beginnen?</button><button data-do="jump Outro" data-choice="outro">Nein</button></div></choice-container>');
// 	};

monogatari.script({
  // The game starts here.
  Start: [
    'play music title with loop',
    'show scene img1 with fadeIn',
    'y Hey! Willkommen! In diesem Spiel kannst du einen Charakter erstellen und durch einen Teil seines Lebens begleiten.',
    'y Im Laufe der Geschichte kannst du Entscheidungen treffen, die deinen Charakter auf einen bestimmten beruflichen Pfad führen.',
    'y Die Entscheidungen die du triffst, wirken sich unterschiedlich auf das Ende der Geschichte aus.',
    'y Viel Spaß beim Spiel. Lass uns mit der Charaktererstellung beginnen!',
    // Namensabfrage
    {
      Input: {
        Text: 'Wie soll dein Charakter heißen?',
        Validation: function (input) {
          return input.trim().length > 0;
        },
        Save: function (input) {
          this.storage({
            player: {
              name: input,
            },
          });
          return true;
        },
        Revert: function () {
          this.storage({
            player: {
              name: '',
            },
          });
        },
        Warnung: 'Du musst einen Namen eingeben!',
      },
    },
    // Geschlecht-Abfrage

    {
      Choice: {
        Dialog: 'Welches Geschlecht soll dein Charakter haben?',
        1: {
          Text: 'Männlich',
          onChosen: function () {
            saveSexMale();
          },
        },
        2: {
          Text: 'Weiblich',
          onChosen: function () {
            saveSexFemale();
          },
        },
        3: {
          Text: 'Divers',
          onChosen: function () {
            saveSexDiverse();
          },
        },
      },
    },

    // Spiel-Beginn
    'show scene math-classroom with fadeIn',
    // 'show character y erzähler at left with fadeIn',
    'y Hallo {{player.name}}.',
    'y {{player.name}} hat bisher ein sehr unkompliziertes Leben geführt. {{player.PerPro}} hängt mit Freunden ab, schaut Serien, zockt und zeichnet nebenbei gerne. Manchmal auf Papier, aber in letzter Zeit auch öfter digital mit verschiedenen Apps.',
    'y Zur Zeit besucht {{player.name}} die Schule und steht langsam vor der Entscheidung, wie {{player.posproma}} weiterer Lebensweg aussehen soll.',
    'y Es gibt die Möglichkeit etwas länger in der Schule zu bleiben und das Abitur abzuschließen oder nach der mittleren Reife (10. Klasse ) die Schule zu verlassen und einen Ausbildungsberuf zu beginnen.',
    'y Auch {{player.posprofe}} Eltern haben verschiedene Ansichten, wie {{player.posproma}} weiterer Lebensweg aussehen soll.',
    'y {{player.PosProFe}} Mutter möchte, dass {{player.perpro}} ein Studium anfängt. Vielleicht Psychologie oder Medizin. Irgendetwas in dieser Richtung würde ihr gefallen.',
    'y {{player.PosProMa}} Vater hingegen will, dass {{player.perpro}} eine klassische Ausbildung beginnt. Am liebsten eine Ausbildung im technischen Bereich, damit {{player.perpro}} später im Familienbetrieb, der seit 3 Generationen geführt wird, mit einsteigen kann.',
    'y {{player.name}} selbst hat sich bisher kaum Gedanken gemacht und muss plötzlich eine Entscheidung treffen.',
    'jump profession',
  ],

  // Erster Knotenpunkt: studium, ausbildung, gap-year, Dual
  profession: [
    'show scene modern-library with fadeIn',
    'y {{player.PerPro}} recherchiert im Internet, welche Möglichkeiten es gibt, nachdem man die Schule abgeschlossen hat.',
    'y Die zwei bekanntesten Wege in Deutschland sind entweder einen der über 300 Ausbildungsberufe zu beginnen oder sich einen von über 20.000 Studiengängen aussuchen.',
    'y Alternativ gibt es noch einen interessanten Mittelweg zwischen klassischem Studium und praxisorientierter Ausbildung: das Duale Studium.',
    'y {{player.name}} fühlt sich von der schieren Masse der Optionen erschlagen und möchte eigentlich den Laptop schon wieder zuklappen.',
    'y Immerhin ähneln sich viele Studiengänge, sodass sie sich leicht kategorisieren lassen.',
    'y {{player.name}} überlegt zusätzlich, ob {{player.perpro}} zwischen Schulabschluss und Ausbildung/Studium ein Überbrückungsjahr beginnen soll.',
    {
      Choice: {
        Dialog: 'Für was wird sich {{player.name}} entscheiden?',
        Studium: {
          Text: 'Studium',
          Do: 'jump Studium',
        },
        Ausbildung: {
          Text: 'Ausbildung',
          Do: 'jump Ausbildung',
        },
        Dual: {
          Text: 'Duales Studium',
          Do: 'jump Dual',
        },
        Überbrückungsjahr: {
          Text: 'Überbrückungsjahr',
          Do: 'jump Überbrückungsjahr',
        },
      },
    },
  ],

  // Studium-Weg
  Studium: [
    'show scene high-school with fadeIn',
    'y {{player.name}} ist der Meinung, dass er mit einem Studium bessere Chancen auf eine Arbeitsstelle hat!',
    'y {{player.PerPro}} bleibt noch weitere 3 Jahre an der Schule, um das Abitur abzulegen.',
    {
      Choice: {
        Dialog:
          'Für welches Themenfeld interessiert sich {{player.name}} besonders?',
        Technik: {
          Text: 'Technik/Naturwissenschaften',
          Do: 'jump node_technical',
        },
        MINT: {
          Text: 'Sozial- und Geisteswissenschaften',
          Do: 'jump node_social',
        },
        Sozial: {
          Text: 'Künstlerisch/Architektur',
          Do: 'jump node_art',
        },
        Business: {
          Text: 'Business',
          Do: 'jump node_biz_standard',
        },
      },
    },
  ],

  // Studium auf zweitem Weg
  studiumZweiterWeg: [
    'show scene outside-campus',
    'y {{player.name}} bekommt von {{player.posprodatma}} Arbeitgeber das Angebot, dass dieser das Studium komplett finanzieren wird.',
    'y {{player.name}} hat die Wahl, sich zwischen einem vertiefenden und technischen Studiengang zu entscheiden oder einen eher Management-fokussierten Studiengang zu wählen.',
    {
      Choice: {
        Technik: {
          Text: 'Technik/Vertiefung',
          Do: 'jump node_technical_ausbildung',
        },
        Business: {
          Text: 'Business/Management',
          Do: 'jump node_biz_ausbildung',
        },
      },
    },
  ],

  // Studiengänge
  node_technical: [
    {
      Function: {
        Apply: () => {
          monogatari.storage({
            player: {
              choice: 'Technik',
            },
          });
        },
        Revert: () => {
          monogatari.storage({
            player: {
              choice: '',
            },
          });
        },
      },
    },
    'y Obwohl {{player.perpro}} noch immer nicht genau weiß, was {{player.perpro}} nach der Schule machen soll, möchte {{player.perpro}} es {{player.posprodatma}} Vater und {{player.posprodatfe}} Mutter recht machen.',
    'Daher entscheidet {{player.perpro}} sich für ein Studium im technischen Bereich, um beide Ratschläge miteinander zu vereinen.',
    'y {{player.PosProMa}} Maschinenbaustudium fordert {{player.perproakk}} sehr und {{player.perpro}} merkt, dass der Lern- und Arbeitsaufwand viel höher ist, als zuvor beim Abitur.',
    'jump con_1',
  ],

  node_social: [
    {
      Function: {
        Apply: () => {
          monogatari.storage({
            player: {
              choice: 'Sozial',
            },
          });
        },
        Revert: () => {
          monogatari.storage({
            player: {
              choice: '',
            },
          });
        },
      },
    },
    "y {{player.name}}'s Mutter freut sich sehr das {{player.perpro}} auf ihren Rat gehöt hat und auch wenn {{player.perpro}} sich nicht ganz sicher ist, ob ein Studium im sozialen Bereich das Richtige ist, so hat {{player.perpro}} auch keine andere Idee und versucht trotzdem {{player.posproma}} Bestes.",
    'y Studienfokus ist der Mensch und seine Wechselwirkung mit der Gesellschaft, in der er sich befindet. Und auch {{player.name}} selbst verändert sich während der Studienzeit und fängt an, wichtige Entscheidungen zu treffen.',
    'jump con_1',
  ],

  node_art: [
    {
      Function: {
        Apply: () => {
          monogatari.storage({
            player: {
              choice: 'Kunst',
            },
          });
        },
        Revert: () => {
          monogatari.storage({
            player: {
              choice: '',
            },
          });
        },
      },
    },
    'y {{player.name}} hat lange überlegt und auch die Ratschläge {{player.posprodatfe}} Eltern beachtet. Aber im Grunde war {{player.perprodat}} klar, dass {{player.perpro}} etwas studieren will, was ganz persönlich zu {{player.perprodat}} selbst passt. Daher hat sich {{player.name}} für ein Studium entschieden, welches {{player.posprofeakk}} Kreativität mit einbezieht.',
    'y Auf den ersten Blick wirkt so eine Studienwahl sehr unscharf und wenig zielgerichtet. Die Studierenden sind so unterschiedlich wie die möglichen Berufswege, die sie später einmal einschlagen. Schon während des Studiums kommt {{player.name}} immer wieder in Situationen, in denen Entscheidungen den späteren beruflichen Weg maßgeblich mit beeinflussen.',
    'jump con_1',
  ],

  node_biz_standard: [
    {
      Function: {
        Apply: () => {
          monogatari.storage({
            player: {
              choice: 'Business',
            },
          });
        },
        Revert: () => {
          monogatari.storage({
            player: {
              choice: '',
            },
          });
        },
      },
    },
    'y {{player.name}} entschließt sich, ein Studium der Betriebswirtschaftslehre zu beginnen. {{player.PerPro}} hat über die Ratschläge {{player.posprodatfe}} Familie nachgedacht. {{player.name}} denkt, dass {{player.perpro}} nicht geeignet für ein Studium in Richtung Sozialwissenschaften ist, aber auch ein reines technisches bzw. naturwissenschaftliches Studium scheint {{player.perprodat}} nicht zu liegen.',
    'y Obwohl {{player.name}} Lust hätte, traut {{player.perpro}} sich nicht zu, etwas künstlerisches zu studieren, weil die Aussichten auf eine Arbeitsstelle sehr schwierig sind.',
    'y Betriebswirtschaftslehre ist einer beliebtesten Studiengänge in Deutschland. Die Jobaussichten sind wohl sehr gut und auch der spätere Verdienst klingt sehr verlockend.',
    'jump con_1',
  ],

  // Weiterbildung Ausbildung
  node_biz_ausbildung: [
    {
      Function: {
        Apply: () => {
          monogatari.storage({
            player: {
              choice: 'Business',
            },
            Revert: () => {
              monogatari.storage({
                player: {
                  choice: '',
                },
              });
            },
          });
        },
      },
    },
    'y {{player.name}} entschließt sich, ein Studium der Betriebswirtschaftslehre zu beginnen.',
    'y Betriebswirtschaftslehre ist einer beliebtesten Studiengänge in Deutschland. Die Jobaussichten sind wohl sehr gut und auch der spätere Verdienst klingt sehr verlockend.',
    'jump con_1',
  ],

  node_technical_ausbildung: [
    {
      Function: {
        Apply: () => {
          monogatari.storage({
            player: {
              choice: 'Technik',
            },
            Revert: () => {
              monogatari.storage({
                player: {
                  choice: '',
                },
              });
            },
          });
        },
      },
    },
    'y {{player.name}} entscheidet sich für ein Studium im technischen Bereich, um vorhandene Kenntnisse weiter zu vertiefen.',
    'y {{player.PosProMa}} Maschinenbaustudium fordert {{player.perproakk}} sehr und {{player.perpro}} merkt, dass der Lern- und Arbeitsaufwand viel höher ist, als zuvor bei der Ausbildung.',
    'jump con_1',
  ],

  // Eigenes Business
  node_biz_own: [
    {
      Function: {
        Apply: () => {
          monogatari.storage({
            player: {
              choice: 'Business_own',
            },
            Revert: () => {
              monogatari.storage({
                player: {
                  choice: '',
                },
              });
            },
          });
        },
      },
    },
    'y Inspiriert von den Erfahrungen, die {{player.name}} in {{player.posprodatma}} Überbrückungsjahr gesammelt hat, ist {{player.perprodat}} nun klar, dass {{player.perpro}} globale Probleme bekämpfen möchte.',
    'y Dafür möchte {{player.perpro}} aber nicht als Angestellter in einer beliebigen Firma arbeiten, sondern {{player.posprofe}} eigenen Visionen umsetzen.',
    'y Deshalb entscheidet {{player.name}} sich für ein Studium der Betriebswissenschaften, um später in der Lage zu sein, eine erfolgreiche Firma führen zu können, die neuartige Klimatechnologien entwickelt. ',
    'jump con_1',
  ],

  // Überbrückungsjahr
  Überbrückungsjahr: [
    'y Trotz der guten Ratschläge {{player.posprodatfe}} Eltern fühlt {{player.name}} sich nicht bereit, eine Entscheidung zu treffen. Der Gedanke daran, sich auf einen Berufsweg festzulegen, erfüllt {{player.name}} mit großer Unsicherheit.',
    'y Deshalb entscheidet {{player.name}} sich dafür, erst einmal ein Überbrückungsjahr zu starten. Nun überlegt {{player.name}}, was genau {{player.perpro}} in diesem Jahr tun möchte.',
    'y Natürlich holt sich {{player.name}} auch die Meinungen seiner Freunde ein und versucht sich von deren Entscheidungen inspirieren zu lassen.',
    'y {{player.name}}s bester Freund schlägt eine Reise in verschiedene Länder dieser Erde vor.',
    'y Ein anderer Freund nutzt die Zeit, um sich auf einige Praktikumsstellen zu bewerben.',
    {
      Choice: {
        Dialog: 'Wie will {{player.name}} das Überbrückungsjahr nutzen?',
        ausland: {
          Text: 'Auslandsreise',
          Do: 'jump gapYearTravel',
        },
        praktika: {
          Text: 'Diverse Praktika',
          Do: 'jump secret',
        },
      },
    },
  ],

  gapYearTravel: [
    'show scene smooth-beach with fadeIn',
    'y {{player.name}} nutzt die einmalige Chance nach dem Abitur, die Welt zu bereisen, um nicht nur neue Eindrücke und Erfahrungen zu sammeln, sondern auch um sich selbst ein bisschen mehr zu verstehen und herauszufinden, was {{player.perproakk}} wirklich in Zukunft interessieren könnte.',
    'y Diese Reise artet in eine kleine Weltreise aus, die durch die Unterstützung {{player.name}}s Eltern und diversen Aushilfsjobs in den jeweiligen Ländern, ermöglicht wird. Dieses unglaublich lehrreiche Jahr verschafft {{player.name}} endlich den nötigen Antrieb für die weitere berufliche Reise.',
    'jump afterTravel',
  ],

  afterTravel: [
    'show scene sunset-beach with fadeIn',
    'y Ein Jahr ist nun vergangen seitdem {{player.name}} zu {{player.posprodatfe}} Reise aufgebrochen ist.',
    'y Nun steht die Rückkehr in die Heimat an und damit müssen sich die Gedanken wieder auf die Lebensplanung richten.',
    'y {{player.name}} reflektiert über die Erfahrungen die {{player.perpro}} in dieser Zeit gemacht hat und sieht 2 Optionen für sich.',
    'y {{player.name}} hat viele Länder bereist, die viel ärmer sind als {{player.posproma}} Heimatland. {{player.PerPro}} stellt fest, dass {{player.perpro}} gern ein globales Problem lösen würde.',
    'y {{player.name}} informiert sich über die Möglichkeiten. {{player.PerPro}} könnte in einer gemeinnützigen Non-Profit Organisation arbeiten oder versuchen mehr Einblicke in die allgemeine Berufswelt zu bekommen.',
    {
      Choice: {
        nonProfit: {
          Text: 'Direkt bei einer Non-Profit Organisation bewerben',
          Do: 'jump nonProfit',
        },
        praktikum: {
          Text: 'Erstmal ein paar Praktika ausprobieren',
          Do: 'jump secret',
        },
      },
    },
  ],

  secret: [
    'show scene dark-room with fadeIn',
    'y Trotz {{player.posprogen}} Überbrückungsjahres hat {{player.name}} immernoch keinen klaren Plan, wie die berufliche Zukunft aussehen könnte.',
    'y Es gibt einfach so viele Dinge auf der Welt, die unglaublich interessant sind. Wie soll man sich da entscheiden können?! Deswegen macht {{player.name}} diverse Praktika in verschiedenen Firmen. Alles was interessant klingt, landet auf der Agenda. Als Praktikant bekommt man viele Einblicke in interne Strukturen und lernt viel über Personal, Marketing und Rechnungswesen.',
    'y Schnell wird {{player.perprodat}} klar, dass {{player.posprofeakk}} berufliche Zukunft genau dort hin führen soll.',
    'jump node_biz_own',
  ],

  // Duales Studium
  Dual: [
    {
      Function: {
        Apply: () => {
          monogatari.storage({
            player: {
              choice: 'Dual',
            },
            Revert: () => {
              monogatari.storage({
                player: {
                  choice: '',
                },
              });
            },
          });
        },
      },
    },
    'y Obwohl {{player.name}} noch immer nicht genau weiß, was {{player.perpro}} nach der Schule machen soll, möchte {{player.perpro}} es irgendwie {{player.posprodatma}} Vater und {{player.posprodatfe}} Mutter recht machen. Daher entscheidet {{player.perpro}} sich für einen interessanten Mittelweg zwischen klassischem Studium und praxisorientierter Ausbildung, dem sogennanten Dualen Studium.',
    'y Durch das Verschicken von Bewerbungen an rennomierte IT-Firmen für {{player.posproma}} Studium in der Fachrichtung "Informatik", kann {{player.perpro}} sich eine gute Praxisstelle sichern und durch {{player.posproma}} gutes Schul-Abschlusszeugnis bekommt {{player.perpro}} auch ein Platz in einer Hochschule ganz in der Nähe.',
    'y  {{player.name}} sieht viele Vorteile in diesem Dualen Ausbildungssystem. Gelerntes in der Theorie kann in der Praxis angewandt werden, man bekommt eine Ausbildungsvergütung und hat sogar durch die Praxis besser Chancen, einen Arbeitsplatz zu bekommen.',
    'jump con_1',
  ],

  // Conundrums Studium
  con_1: [
    'show scene school-corridor with fadeIn',
    'y {{player.name}} ist frisch an der Universität und fühlt sich durch den riesigen Campus, die verwinkelten, labyrinthartigen Gebäude und das teilweise unidentifizierbare Essen in der Mensa erst einmal leicht überfordert.',
    'y In den Einführungsveranstaltungen werden alle wichtigen und organisatorischen Abläufe in kurzer Zeit erklärt. {{player.name}} macht sich hastig Notizen und versucht, nichts zu vergessen.',
    'y Schon bald lernt {{player.name}} die anderen Studenten kennen und das Studieren geht richtig los. {{player.PerPro}} besucht viele verschiedene Vorlesungen und hat Spaß am Studieren.',
    // Change scence
    'show scene school-building with fadeIn',
    'y Das erste Semester nähert sich langsam dem Ende. {{player.name}} sitzt in der Vorlesung und hört zufällig am Rande etwas von Anmeldungen zur Semesterprüfung.',
    'player "Verdammt, ich weiß nichts von irgendwelchen Anmeldungen zur Prüfung. Ich dachte man kann automatisch seine Prüfung schreiben. Ich muss das wohl in der Einführungsveranstaltung überhört haben!"',
    'y {{player.name}} erzählt einen {{player.posprodatfe}} Freunde über die neuste Erkenntnis.',
    'y "Ach mach dir keinen Kopf, du kannst dich auch noch kurz vor der Prüfung anmelden. Die von der Verwaltung sind da nicht ganz so streng."',
    'y Diese Information beruhight {{player.name}} erst einmal.',
    {
      Choice: {
        Class: 'conundrumChoice',
        Dialog:
          'Trotzdem ist sich {{player.name}} unsicher. Sollte er sich auf diesen Ratschlag verlassen? Immerhin ist er schon in einem höheren Semester, er sollte also wissen wie die Prüfungsanmeldung abläuft. Man könnte auch in der Verwaltung nachfragen, würde aber dann die ganzen wichtigen Vorlesungen an diesem Tag verpassen. Die Wartezeiten sind immer sehr lang.',
        1: {
          Text: 'Lieber die Vorlesung nicht verpassen.',
          onChosen: function () {
            saveConundrumChoiceBlue(), con1Fail();
          },
          // 'onChosen': function() {con1Fail()},
          Do: 'jump con_2',
          onRevert: function () {
            delConundrumBlau(), delCon1Fail();
          },
        },
        2: {
          Text: 'Nochmal die Prüfungsordnung durchgehen. {{player.name}} verpasst die Vorlesung.',
          onChosen: function () {
            saveConundrumChoiceRed(), con1Win();
          },
          // 'onChosen': function() {con1Win()},
          Do: 'jump con_2',
          onRevert: function () {
            delConundrumRot(), delCon1Win();
          },
        },
      },
    },
  ],

  con_3: [
    'show scene common-suburb with fadeIn',
    'y Das erste Semester ist geschafft. Die Vorlesungen, sowie die Prüfungen sind beendet. Jetzt ist Sommer und die vorlesungsfreie Zeit beginnt.',
    'y Das bedeutet, {{player.name}} hat viel freie Zeit.',
    {
      Choice: {
        Class: 'conundrumChoice',
        Dialog: 'Wie wird {{player.name}} die Zeit nutzen?',
        1: {
          Text: 'Einen Teil der freien Zeit könnte man für ein Praktikum nutzen. {{player.name}} hält nach einem Praktikumsplatz Ausschau.',
          onChosen: function () {
            saveConundrumChoiceRed(), con3Win();
          },
          // 'onChosen': function() {con3Win()},
          Do: 'jump failWin1',
          onRevert: function () {
            delConundrumRot(), delCon3Win();
          },
        },
        2: {
          Text: '{{player.name}} hat Lust, sich kulturell weiterzubilden. Ein mehrwöchiger Auslandsaufenthalt mit vielen Reisen klingt sehr gut.',
          onChosen: function () {
            saveConundrumChoiceBlue(), con3Fail();
          },
          // 'onChosen': function() {con3Fail()},
          Do: 'jump failWin1',
          onRevert: function () {
            delConundrumBlau(), delCon3Fail();
          },
        },
      },
    },
  ],

  con_2: [
    'show scene lecture-hall with fadeIn',
    'y Die Prüfungen stehen an. Voller Entsetzen stellt {{player.name}} fest, dass {{player.perpro}} sich nicht richtig vorbereitet hat.',
    'y Der Prüfungstag kam viel zu schnell und ausgerechnet gestern war auch noch eine Party, der {{player.name}} nicht widerstehen konnte.',
    'y {{player.name}} hat nicht genug gelernt und ist verzweifelt.',
    'y Während der Prüfung ergibt sich eine Situation, in der {{player.name}} betrügen könnte und einfach die Antworten {{player.posprogen}} Banknachbarn kopiert.',
    'y Die Situation ist günstig und niemand würde etwas mitbekommen in diesem großen Hörsaal.',
    {
      Choice: {
        Class: 'conundrumChoice',
        Dialog: 'Was wird {{player.name}} tun?',
        1: {
          Text: '{{player.name}} nutzt die Gelegenheit und schreibt ab.',
          onChosen: function () {
            saveConundrumChoiceBlue(), con2Fail();
          },
          // 'onChosen': function() {con2Fail()},
          Do: 'jump con_3',
          onRevert: function () {
            delConundrumBlau(), delCon2Fail();
          },
        },
        2: {
          Text: '{{player.name}} schreibt nicht ab.',
          onChosen: function () {
            saveConundrumChoiceRed(), con2Win();
          },
          // 'onChosen': function() {con2Win()},
          Do: 'jump con_3',
          onRevert: function () {
            delConundrumRot(), delCon2Win();
          },
        },
      },
    },
  ],

  // Condundrum Studium Konsequenzen
  failWin1: [
    {
      Conditional: {
        Condition: function () {
          if (this.storage('con1Win').length == 1) {
            return 'BusinessWin1';
          } else if (this.storage('con1Fail').length == 1) {
            return 'BusinessFail1';
          }
        },
        BusinessWin1: 'jump BusinessWin1',
        BusinessFail1: 'jump BusinessFail1',
      },
    },
  ],

  BusinessWin1: [
    'show scene school-building with fadeIn',
    'y Mal sehen, wie sich die Entscheidungen, die {{player.name}} getroffen hat, ausgewirkt haben.',
    'y {{player.name}} hat beim Lesen der Prüfungsordnung herausgefunden, dass man sich doch rechtzeitig zur Prüfung anmelden muss, im Gegensatz zu dem, was {{player.perpro}} von dem Studienkollegen gesagt bekommen hat.',
    'y {{player.name}} war somit in der Lage, sich rechtzeitig zur Prüfung anzumelden und konnte an der Prüfung teilnehmen.',
    'jump failWin2',
  ],

  BusinessFail1: [
    'show scene school-building with fadeIn',
    'y Mal sehen, wie sich die Entscheidungen, die {{player.name}} getroffen hat, ausgewirkt haben.',
    'y {{player.name}} konnte sich nicht rechtzeitig zur Prüfung anmelden und kann diese Prüfung erst ein Jahr später wiederholen.',
    'y Da {{player.perpro}} sich auf den Ratschlag von jemand anderen verlassen hat, kostet {{player.perproakk}} diese Entscheidung ein ganzes Jahr.',
    'jump failWin2',
  ],

  failWin2: [
    {
      Conditional: {
        Condition: function () {
          if (this.storage('con2Win').length == 1) {
            return 'BusinessWin2';
          } else if (this.storage('con2Fail').length == 1) {
            return 'BusinessFail2';
          }
        },
        BusinessWin2: 'jump BusinessWin2',
        BusinessFail2: 'jump BusinessFail2',
      },
    },
  ],

  BusinessWin2: [
    'show scene lecture-hall with fadeIn',
    'y Da {{player.name}} bei der Prüfung nicht betrogen hat, muss {{player.perpro}} mit den Konsequenzen leben und ist durchgefallen.',
    'y Die Prüfung muss nun in einem Jahr wiederholt werden. Dies heißt auch, dass das Studium dadurch ein Jahr länger dauert.',
    'y Nach der Verkündung der Ergebnisse kommt jedoch der Professor auf {{player.name}} zu und teilt {{player.perprodat}} sein Bedauern über das schlechte Ergebnis mit.',
    'y Jedoch erfährt {{player.name}}, dass der Professor es {{player.perprodat}} hoch anrechnet, dass {{player.perpro}} nicht betrogen hat.',
    'y Da sich {{player.name}} sehr gut mit dem Professor versteht, bietet dieser an, {{player.perprodat}} später einen Job zu vermitteln.',
    'jump failWin3',
  ],

  BusinessFail2: [
    'show scene lecture-hall with fadeIn',
    'y {{player.name}} hat sich dafür entschieden, bei der Prüfung zu betrügen.',
    'y {{player.name}} wurde nicht erwischt und besteht die Prüfung.',
    'y Kurz darauf hat wird {{player.name}} zu einem Vorstellungsgespräch eingeladen.',
    'y Die Leute, die {{player.name}} gegenüber sitzen machen einen freundlichen Eindruck und das Gespräch läuft sehr gut.',
    'y Jedoch werden {{player.name}} einige spezifische Fragen gestellt, die {{player.perpro}} nicht beantworten kann.',
    'y Wie ein Blitz trifft {{player.name}} die Erkenntnis, dass {{player.perpro}} diese Fragen nicht beantworten kann, da diese Inhalte damals Teil der Prüfung waren, bei der {{player.name}} betrogen hatte!',
    'y {{player.name}} wird nervös und der Rest des Gesprächs verläuft leider nicht mehr so gut.',
    'jump failWin3',
  ],

  failWin3: [
    {
      Conditional: {
        Condition: function () {
          if (this.storage('con3Win').length == 1) {
            return 'BusinessWin3';
          } else if (this.storage('con3Fail').length == 1) {
            return 'BusinessFail3';
          }
        },
        BusinessWin3: 'jump BusinessWin3',
        BusinessFail3: 'jump BusinessFail3',
      },
    },
  ],

  BusinessWin3: [
    'show scene common-suburb with fadeIn',
    'y {{player.name}} bekommt später noch andere Job-Angebote, da {{player.perpro}} durch die Praktika etwas nicht dringendes, aber wichtiges rechtzeitig erledigt hat. Durch die geknüpften Kontakte während der Praktikumszeit, konnte einer der Kontakte {{player.perprodat}} ein Job-Angebot vermitteln.',
    'jump ConditionSetDegree',
  ],

  BusinessFail3: [
    'show scene common-suburb with fadeIn',
    'y {{player.name}} bewirbt sich nach dem Studium auf mehrere Arbeitsstellen, bekommt aber keine Zusage. Da {{player.name}} eine wichtige, aber nicht dringende Sache ignoriert hat, muss {{player.perpro}} die Zeit nach dem Abschluss bis zum ersten Jobangebot mit Arbeitslosengeld überbrücken.',
    'y Letztendlich, nach einer anstrengenden Bewerbungsphase, melden sich einige Firmen bei {{player.perprodat}}.',
    'jump ConditionSetDegree',
  ],

  // Studium Abschluss
  ConditionSetDegree: [
    {
      Conditional: {
        Condition: function () {
          if (this.storage('player').choice == 'Business') {
            return 'Business';
          } else if (this.storage('player').choice == 'Business_own') {
            return 'Business_own';
          } else if (this.storage('player').choice == 'Technik') {
            return 'Technik';
          } else if (
            this.storage('player').choice == 'Sozial' &&
            this.storage('conundrumRot').length >= 2
          ) {
            return 'Sozial_1';
          } else if (
            this.storage('player').choice == 'Sozial' &&
            this.storage('conundrumBlau').length >= 2
          ) {
            return 'Sozial_2';
          } else if (
            this.storage('player').choice == 'Kunst' &&
            this.storage('conundrumRot').length >= 2
          ) {
            return 'Kunst_1';
          } else if (
            this.storage('player').choice == 'Kunst' &&
            this.storage('conundrumBlau').length >= 2
          ) {
            return 'Kunst_2';
          } else if (this.storage('player').choice == 'Dual') {
            return 'Dual';
          }
        },
        Business: 'jump degree_biz',
        Business_own: 'jump degree_biz_own',
        Technik: 'jump degree_tech',
        Sozial_1: 'jump degree_soc_1',
        Sozial_2: 'jump degree_soc_2',
        Kunst_1: 'jump degree_art_1',
        Kunst_2: 'jump degree_art_2',
        Dual: 'jump ende13',
      },
    },
  ],

  // Degree Nodes
  degree_biz: [
    'show scene college-graduation',
    'y Herzlichen Glückwunsch! {{player.name}} hat {{player.posproma}} Studium der Betriebswirtschaftslehre erfolgreich abgeschlossen.',
    'y {{player.name}} hat kurz vor Abschluss des Studiums ein paar wenige Bewerbungen an große Firmen und Konzerne geschrieben.',
    'y {{player.name}} erhält kurz danach Antworten auf {{player.posprofeakk}} Bewerbungen und bekommt zwei Stellen angeboten.',
    'y Das erste Jobangebot wäre eine Stelle als Analyst bei einer großen Investment-Bank.',
    'y Die andere Stelle wäre als Junior-Consultant bei einer Consulting-Firma.',
    'y Consulting-Firmen beraten Unternehmen dabei, strategisch wichtige Entscheidungen zu treffen, Prozesse zu optimieren und bieten Schulungen für Mitarbeiter der Unternehmen an.',
    'y Als Junior-Consultant befindet man sich an der Schnittstelle zwischen der Unternehmensleitung und den Managern aus den einzelnen Fachbereichen des Consulting-Prozesses. Junior-Consultants helfen dabei, innovative und hilfreiche Lösungen zu entwickeln, um dass das zu beratende Unternehmen optimal aufgestellt ist.',
    'y Um eine Entscheidung zu treffen, versucht {{player.name}} sich über einige Dinge klar zu werden:',
    'jump personal_1',
  ],

  degree_biz_own: [
    'show scene college-graduation',
    'y Herzlichen Glückwunsch! {{player.name}} hat {{player.posproma}} Studium der Betriebswirtschaftslehre erfolgreich abgeschlossen.',
    'y Jetzt hat {{player.name}} das Wissen, eine eigene Firma zu gründen.',
    'y Doch zuerst muss {{player.perpro}} sich noch ein paar Gedanken über einige Dinge machen.',
    'jump personal_1',
  ],

  degree_tech: [
    'show scene college-graduation',
    'y {{player.name}} hat {{player.posproma}} Studium erfolgreich abgeschlossen.',
    'y Da {{player.name}} sich für einen technischen Studiengang entschieden hat, ist {{player.perpro}} nun in der Lage, sich zwischen einer Stelle als Ingenieur in einem großem Konzern zu entscheiden oder als Ingenieur in einem kleineren Familienbetrieb anzufangen.',
    'y Damit {{player.name}} eine Entscheidung treffen kann, geht {{player.perpro}} in sich und macht sich über ein paar wichtige Kriterien Gedanken.',
    'jump personal_1',
  ],

  degree_soc_1: [
    'show scene college-graduation',
    'y {{player.name}} hat {{player.posproma}} Studium erfolgreich abgeschlossen.',
    'y {{player.PerPro}} bekommt eine Stelle angeboten. Besagte Stelle wäre eine befristete Forschungssposition an einer Universität. Der Forschungsschwerpunkt würde auf {{player.pospromaakk}} Kenntnissen aus dem Studium aufbauen.',
    'y {{player.name}} ist sich noch nicht ganz sicher, ob {{player.perpro}} diese Stelle annehmen möchte und macht sich vorher über ein paar wichtige Kriterien Gedanken.',
    'jump personal_1',
  ],

  degree_soc_2: [
    'show scene college-graduation',
    'y {{player.name}} hat {{player.posproma}} Studium erfolgreich abgeschlossen.',
    'y Kurz nach Abschluss des Studiums schreibt {{player.name}} ein paar Bewerbungen und wartet auf Antworten.',
    'y Unerwarterweise wartet {{player.perpro}} sehr lang auf Rückmeldungen.',
    'y Nach einer ganzen Weile bekommt {{player.perpro}} dann ein Angebot für eine befristete Forschungssposition an einer Universität. Der Forschungsschwerpunkt würde auf {{player.pospromaakk}} Kenntnissen aus dem Studium aufbauen.',
    'y {{player.name}} ist sich noch nicht ganz sicher, ob {{player.perpro}} diese Stelle annehmen möchte und macht sich vorher über ein paar wichtige Kriterien Gedanken.',
    'jump personal_1',
  ],

  degree_art_1: [
    'show scene college-graduation',
    'y {{player.name}} hat {{player.posproma}} Studium erfolgreich abgeschlossen.',
    'y Kurz nach Abschluss des Studiums schreibt {{player.name}} ein paar Bewerbungen und wartet auf Antworten.',
    'y Unerwarterweise wartet {{player.perpro}} sehr lang auf Rückmeldungen.',
    'y Nach einer ganzen Weile bekommt {{player.perpro}} dann ein Angebot.',
    'Besagte Stelle wäre ein Job im Gamedesign-Team eines großen Spieleentwicklers.',
    'y {{player.name}} ist sich noch nicht ganz sicher, ob {{player.perpro}} diese Stelle annehmen möchte und macht sich vorher über ein paar Dinge Gedanken, die {{player.perprodat}} wahrscheinlich wichtig sind und {{player.pospromaakk}} späteren Lebensweg beeinflussen.',
    'jump personal_1',
  ],

  degree_art_2: [
    'show scene college-graduation',
    'y {{player.name}} hat {{player.posproma}} Studium erfolgreich abgeschlossen.',
    'y Kurz nach Abschluss des Studiums schreibt {{player.name}} ein paar Bewerbungen und wartet auf Antworten.',
    'y Unerwarterweise wartet {{player.perpro}} sehr lang auf Rückmeldungen.',
    'y Tatsächlich sieht sich {{player.name}} gezwungen, für die Übergangszeit Arbeitslosengeld zu beantragen.',
    'y Nach einer ganzen Weile bekommt {{player.perpro}} dann ein Angebot für eine Stelle als Mitglied des Gamedesign-Teams eines großen Spieleentwicklers.',
    'y {{player.name}} ist sich noch nicht ganz sicher, ob {{player.perpro}} diese Stelle annehmen möchte und macht sich vorher über ein paar wichtige Kriterien Gedanken.',
    'jump personal_1',
  ],

  // Jobmatch
  personal_1: [
    'show scene money-rain with fadeIn',
    {
      Choice: {
        Dialog:
          'Möchte {{player.name}} ein sehr großes Vermögen anhäufen oder sind andere Dinge im Leben wichtiger?',
        rot: {
          Text: '{{player.name}} möchte ein großes Vermögen anhäufen.',
          onChosen: function () {
            saveStudyPersonalChoiceRed();
          },
          Do: 'jump personal_2',
          onRevert: function () {
            delPersonalRot();
          },
        },
        blau: {
          Text: 'Geld ist schon wichtig, aber es gibt auch andere wichtige Dinge im Leben.',
          onChosen: function () {
            saveStudyPersonalChoiceBlue();
          },
          Do: 'jump personal_2',
          onRevert: function () {
            delPersonalBlau();
          },
        },
      },
    },
  ],

  personal_2: [
    'show scene messy-office with fadeIn',
    {
      Choice: {
        Dialog:
          'Soll {{player.name}} sich in Zukunft auf eine berufliche Tätigkeit konzentrieren, die {{player.perpro}} sehr gut kann oder ist es {{player.perprodat}} wichtig, viele abwechslungsreiche und geistig herausfordernde Tätigkeiten zu tun?',
        rot: {
          Text: 'Auf eine Tätigkeit konzentrieren.',
          onChosen: function () {
            saveStudyPersonalChoiceRed();
          },
          Do: 'jump personal_3',
          onRevert: function () {
            delPersonalRot();
          },
        },
        blau: {
          Text: 'Abwechslungsreiche Arbeiten ausführen.',
          onChosen: function () {
            saveStudyPersonalChoiceBlue();
          },
          Do: 'jump personal_3',
          onRevert: function () {
            delPersonalBlau();
          },
        },
      },
    },
  ],

  personal_3: [
    'show scene multi-office with fadeIn',
    {
      Choice: {
        Dialog:
          'Soll {{player.name}} lieber in einem Team arbeiten oder bevorzugt {{player.perpro}} individuelles und eigenständiges Arbeiten?',
        rot: {
          Text: '{{player.name}} kann sich besonders während der Arbeit mit einem Team selbst übertreffen.',
          onChosen: function () {
            saveStudyPersonalChoiceRed();
          },
          Do: 'jump personal_4',
          onRevert: function () {
            delPersonalRot();
          },
        },
        blau: {
          Text: '{{player.name}} arbeitet lieber für sich selber.',
          onChosen: function () {
            saveStudyPersonalChoiceBlue();
          },
          Do: 'jump personal_4',
          onRevert: function () {
            delPersonalBlau();
          },
        },
      },
    },
  ],

  personal_4: [
    'show scene lab-office with fadeIn',
    {
      Choice: {
        Dialog: 'Wie würde sich {{player.name}} selbst einschätzen?',
        rot: {
          Text: '{{player.name}} sieht sich eher als Spezialist: {{player.name}} kennt sich lieber in einer Sache richtig gut aus, als in mehreren Sachen ein wenig.',
          onChosen: function () {
            saveStudyPersonalChoiceRed();
          },
          Do: 'jump personal_5',
          onRevert: function () {
            delPersonalRot();
          },
        },
        blau: {
          Text: '{{player.name}} ist eher der Generalist: {{player.PerPro}} kennt sich lieber in vielen Sachen ein wenig aus, als in einer Sache sehr gut.',
          onChosen: function () {
            saveStudyPersonalChoiceBlue();
          },
          Do: 'jump personal_5',
          onRevert: function () {
            delPersonalBlau();
          },
        },
      },
    },
  ],

  personal_5: [
    {
      Choice: {
        Dialog:
          'In welcher Arbeitsumgebung fühlt sich {{player.name}} am wohlsten?',
        rot: {
          Text: '{{player.name}} ist es wichtig, immer einen Ansprechpartner zu haben und klare Arbeitsaufträge zu bekommen.',
          onChosen: function () {
            saveStudyPersonalChoiceRed();
          },
          Do: 'jump ConditionSet',
          onRevert: function () {
            delPersonalRot();
          },
        },
        blau: {
          Text: '{{player.name}} kann sich seine Zeit und seine Arbeitsaufgaben selbst einteilen und beschaffen.',
          onChosen: function () {
            saveStudyPersonalChoiceBlue();
          },
          Do: 'jump ConditionSet',
          onRevert: function () {
            delPersonalBlau();
          },
        },
      },
    },
  ],

  personal_6: [
    {
      Choice: {
        Dialog:
          'Wie viel Zeit ist {{player.name}} bereit wöchentlich in {{player.posprodatma}} Job zu arbeiten?',
        80: {
          Text: '60-80 Stunden Arbeitszeit pro Woche sind kein Problem für {{player.perproakk}}. {{player.PerPro}} kann es nicht ausstehen, nicht zu arbeiten.',
          Do: 'jump endeBusiness1',
        },
        40: {
          Text: 'Mehr als 40-60 Stunden Arbeitszeit pro Woche möchte {{player.name}} nicht arbeiten. {{player.PerPro}} schätzt seine Freizeit sehr.',
          Do: 'jump endeBusiness2',
        },
      },
    },
  ],

  // Jobmatch Konsequenz
  ConditionSet: [
    {
      Conditional: {
        Condition: function () {
          if (
            this.storage('player').choice == 'Kunst' &&
            this.storage('personalRot').length >= 3
          ) {
            return 'Kunst_1';
          } else if (
            this.storage('player').choice == 'Kunst' &&
            this.storage('personalBlau').length >= 3
          ) {
            return 'Kunst_2';
          } else if (
            this.storage('player').choice == 'Sozial' &&
            this.storage('personalRot').length >= 3
          ) {
            return 'Sozial_1';
          } else if (
            this.storage('player').choice == 'Sozial' &&
            this.storage('personalBlau').length >= 3
          ) {
            return 'Sozial_2';
          } else if (
            this.storage('player').choice == 'Technik' &&
            this.storage('personalRot').length >= 3
          ) {
            return 'Technik_1';
          } else if (
            this.storage('player').choice == 'Technik' &&
            this.storage('personalBlau').length >= 3
          ) {
            return 'Technik_2';
          } else if (
            this.storage('player').choice == 'Business' &&
            this.storage('personalRot').length >= 3
          ) {
            return 'Business_1';
          } else if (
            this.storage('player').choice == 'Business' &&
            this.storage('personalBlau').length >= 3
          ) {
            return 'Business_2';
          } else if (this.storage('player').choice == 'Business_own') {
            return 'Business_3';
          } else {
            return 'Secret';
          }
        },
        Kunst_1: 'jump endeKunst1',
        Kunst_2: 'jump endeKunst2',
        Sozial_1: 'jump endeSozial1',
        Sozial_2: 'jump endeSozial2',
        Technik_1: 'jump endeTechnik1',
        Technik_2: 'jump endeTechnik2',
        Business_1: 'jump personal_6',
        Business_2: 'jump personal_6',
        Business_3: 'jump endeBusiness3',
        Secret: 'jump Condition_2',
      },
    },
  ],

  // Ende4
  endeKunst1: [
    'show scene tech-office with fadeIn',
    "d Durch {{player.name}}'s Fähigkeiten {{player.posprofeakk}} Kunst auch digital zu praktizieren und durch die vielen Kontakte, die {{player.name}} während {{player.posprogen}} Studiums knüpfen konnte, hat {{player.perpro}} es geschafft, einen Job im Game Design Team eines großen Spieleentwicklers zu ergattern. Durch diese Anstellung hat {{player.perpro}} ein regelmäßiges Einkommen, genügend Struktur und Unterstützung, jedoch wird {{player.posprofeakk}} künstlerische Freiheit groß eingeschränkt. Der Arbeitgeber gibt die meisten Themen vor, zu denen man kreativ sein darf.",
    {
      Choice: {
        Dialog:
          'Nutze die übrige Zeit, um einen anderen Lebensweg einzuschlagen und spiele noch einmal von vorne.',
        restart: {
          Text: 'Nochmal von vorne beginnen',
          Do: 'jump Start',
        },
        outro: {
          Text: 'Spiel beenden',
          Do: 'jump outro',
        },
      },
    },
  ],
  // Ende5
  endeKunst2: [
    'show scene art-room with fadeIn',
    'e {{player.name}} hat es geschafft nicht nur {{player.posproma}} künstlerisches Know-How zu erweitern, sondern hat schon während des Studiums Kontakte geknüpft. {{player.PosProFe}}  Persönlichkeit, überragendes Talent und seine ehrliche Art überzeugt Galeristen, Kunden und Sponsoren. {{player.name}} macht sich als freischaffender Kunsttreibender ziemlich gut!',
    'e Ein regelmäßiges Einkommen hat {{player.perpro}} nicht, aber ist frei und alle vorherigen Bemühungen haben dafür gesorgt, dass {{player.perprodat}} nun die Kunstwelt offen steht. Jetzt liegt es an {{player.perprodat}}, sich mit Einsatz und Risikobereitschaft einen Namen in der Welt der Kreativen zu machen.',
    {
      Choice: {
        Dialog:
          'Nutze die übrige Zeit, um einen anderen Lebensweg einzuschlagen und spiele noch einmal von vorne.',
        restart: {
          Text: 'Nochmal von vorne beginnen',
          Do: 'jump Start',
        },
        outro: {
          Text: 'Spiel beenden',
          Do: 'jump outro',
        },
      },
    },
  ],
  // Ende6
  endeSozial1: [
    'show scene prof-office with fadeIn',
    'f Glückwunsch, {{player.name}} nimmt die Stelle als wissenschaftlicher Mitarbeiter an einer Universität an.',
    'f Zu {{player.posprodatma}} großen Entsetzen stellt {{player.name}} fest, dass {{player.perpro}} zwar eine Teilzeitstelle unterschrieben hat, aber {{player.posproma}} Chef fordert trotzdem eine zeitliche Anwesenheit, wie es bei einer Vollzeitstelle üblich wäre, mit dem Nachteil, dass diese Überstunden nicht vergütet werden.',
    'f {{player.name}} stellt fest, dass {{player.perpro}} zwar an seiner Leidenschaft forschen und arbeiten kann, aber das System hat ganz klar einige Nachteile.',
    {
      Choice: {
        Dialog:
          'Nutze die übrige Zeit, um einen anderen Lebensweg einzuschlagen und spiele noch einmal von vorne.',
        restart: {
          Text: 'Nochmal von vorne beginnen',
          Do: 'jump Start',
        },
        outro: {
          Text: 'Spiel beenden',
          Do: 'jump outro',
        },
      },
    },
  ],
  // Ende7
  endeSozial2: [
    'g Glückwunsch, {{player.name}} hat nicht nur das Studium erfolgreich beendet, sondern hat sich auch basierend auf den vorherigen Auswahlmöglichkeiten dafür entschieden, durch Selbstständigkeit, anderen Menschen zu helfen. {{player.PerPro}} hat eine gemeinnützige Organisation als Betriebsträger gegründet und arbeitet in dieser als Arbeitnehmer. Dies gibt {{player.perprodat}} die Freiheit, sehr abwechslungsreich zu arbeiten und wesentlich mehr soziale Dienste abzudecken. Jedoch gehört zu einer Selbstständigkeit immer mehr als nur der eigentliche Job und die Bezahlung hält sich in Grenzen.',
    {
      Choice: {
        Dialog:
          'Nutze die übrige Zeit, um einen anderen Lebensweg einzuschlagen und spiele noch einmal von vorne.',
        restart: {
          Text: 'Nochmal von vorne beginnen',
          Do: 'jump Start',
        },
        outro: {
          Text: 'Spiel beenden',
          Do: 'jump outro',
        },
      },
    },
  ],
  // Ende8
  endeTechnik1: [
    'h Glückwunsch, {{player.name}} hat nicht nur das Studium erfolgreich beendet, sondern hat sich auch basierend auf den vorherigen Auswahlmöglichkeiten dafür entschieden, sich als Ingenieur einem großen Konzern anzuschließen. {{player.PerPro}} wird sehr gut bezahlt. Die Arbeitsstrukturen sind zwar gut durchdacht, jedoch sehr starr und durch die Größe des Teams sind Spezialisten stärker gefragt, als jemand mit vielen Fähigkeiten.',
    {
      Choice: {
        Dialog:
          'Nutze die übrige Zeit, um einen anderen Lebensweg einzuschlagen und spiele noch einmal von vorne.',
        restart: {
          Text: 'Nochmal von vorne beginnen',
          Do: 'jump Start',
        },
        outro: {
          Text: 'Spiel beenden',
          Do: 'jump outro',
        },
      },
    },
  ],
  // Ende9
  endeTechnik2: [
    'i Glückwunsch, {{player.name}} hat nicht nur das Studium erfolgreich beendet, sondern hat sich auch basierend auf den vorherigen Auswahlmöglichkeiten dafür entschieden, sich einem kleinem Familienbetrieb als Bauingenieur anzuschließen. Hier ist {{player.perpro}} in einem Umfeld, dass {{player.perprodat}} mehr persönliche Freiheit bieten kann, sowie eine berufliche Verwirklichung in einem kleineren Rahmen. Dafür wird die Bezahlung geringer sein, als in einem großem Konzern.',
    {
      Choice: {
        Dialog:
          'Nutze die übrige Zeit, um einen anderen Lebensweg einzuschlagen und spiele noch einmal von vorne.',
        restart: {
          Text: 'Nochmal von vorne beginnen',
          Do: 'jump Start',
        },
        outro: {
          Text: 'Spiel beenden',
          Do: 'jump outro',
        },
      },
    },
  ],
  // Ende1
  endeBusiness1: [
    'show scene ceo-office with fadeIn',
    'a Wow, {{player.name}} ist ein echtes Arbeitstier. {{player.PerPro}} entscheidet sich, das Jobangebot der Investment-Bank anzunehmen.',
    'a Im Studium hat {{player.name}} gemerkt, das {{player.perpro}} ein Händchen für alle Belange im oberen Top-Management-Bereich hat. Seien es Wachstumsstrategien, Weiterentwicklungen oder Prozessoptimierungen. Diese Talente und {{player.posprofeakk}} Affinität, leicht Kontakte zu knüpfen, hat {{player.perproakk}} direkt in eine große Investmentbank als Analyst geführt. Die Bezahlung ist astronomisch hoch und {{player.perpro}} wird gefördert und gefordert.',
    'a Investment Banker helfen Regierungen, Firmen und Institutionen bei der Kapitalbeschaffung, Fusionen und Übernahmen.',
    'a Schon nach einer kurzen Zeit in der Firma gehört {{player.name}} zu den Top-Verdienern. {{player.PerPro}} lernt in den Verhandlungen mit CEOs und Vorstandsvorsitzenden eine Menge über Geschäftsmechaniken.',
    'a Nach einer Weile merkt {{player.name}}, dass irgendwas fehlt. {{player.PerPro}} weiß zwar, dass die Arbeit wichtig für das Unternehmen ist, aber {{player.perpro}} selbst hat das Gefühl von Leere. Manchmal kommt {{player.perprodat}} diese Tätigkeit sinnlos vor.',
    {
      Choice: {
        Dialog:
          'Nutze die übrige Zeit, um einen anderen Lebensweg einzuschlagen und spiele noch einmal von vorne.',
        restart: {
          Text: 'Nochmal von vorne beginnen',
          Do: 'jump Start',
        },
        outro: {
          Text: 'Spiel beenden',
          Do: 'jump outro',
        },
      },
    },
  ],
  // Ende2
  endeBusiness2: [
    'b Glückwunsch, {{player.name}} entscheidet sich, das Stellenangebot als Manager bei einem großen Konzern anzunehmen.',
    'b {{player.name}} Aufgabe besteht im managen von Teams. Da {{player.name}} sich im Studium auf Finanzen spezialisiert hat, übernimmt {{player.perpro}} die Aufsicht über das Finanzteam.',
    'b Der Job erfordert ein großes Maß an Disziplin, Stressresistenz und diplomatisches Geschick. Die Arbeitstage sind lang, der Plan straff, aber die Atmosphäre im Team ist gut.',
    'b {{player.name}} hofft, dass er die Motivation des Teams hoch halten kann, denn in einem großen Konzern muss sich jedes Zahnrädchen genau getaktet bewegen, damit die Maschinerie funktionert.',
    {
      Choice: {
        Dialog:
          'Nutze die übrige Zeit, um einen anderen Lebensweg einzuschlagen und spiele noch einmal von vorne.',
        restart: {
          Text: 'Nochmal von vorne beginnen',
          Do: 'jump Start',
        },
        outro: {
          Text: 'Spiel beenden',
          Do: 'jump outro',
        },
      },
    },
  ],
  // Ende3
  endeBusiness3: [
    'c Getrieben von vielen Ideen, die {{player.name}} während des Studiums in den Sinn kamen, gründet {{player.perpro}} ein eigenes Unternehmen, welches sich damit beschäftigt, Fisch auf Pflanzenbasis zu produzieren. Schon immer hatte {{player.name}} dieses gewisse "Ich-will-die-Welt-retten"-Gen. Das Studium hat nur dafür gesorgt, dass {{player.perpro}} nun das nötige Know-How und die Kontakte besitzt. Der Weg ist nicht leicht und {{player.perpro}} muss sich mit vielen Themen beschäftigen, die sehr komplex und innovativ sind. Jedoch konnte {{player.perpro}} sich den Traum erfüllen, einen Teil zu einer besseren Welt beizutragen.',
    {
      Choice: {
        Dialog:
          'Nutze die übrige Zeit, um einen anderen Lebensweg einzuschlagen und spiele noch einmal von vorne.',
        restart: {
          Text: 'Nochmal von vorne beginnen',
          Do: 'jump Start',
        },
        outro: {
          Text: 'Spiel beenden',
          Do: 'jump outro',
        },
      },
    },
  ],

  // NonProfit Ende 10
  nonProfit: [
    'show scene anime-jungle with fadeIn',
    'j {{player.name}} hat sich bei einer Non-Profit Organisation beworben und wurde angenommen. {{player.PerPro}} arbeitet nun in einer Non-Profit Organisation.',
    'j Non-Profit Organisationen sind nationale oder internationale Wohltätigkeitsorganisationen mit spezifischer Mission ein (Welt)-Problem zu lösen, z.B. in den Bereichen Umwelt, Humanitäres, Gesundheit oder Entwicklung.',
    'j Sie funktionieren wie gewöhnliche Firmen. Sie führen Buchhaltung, müssen ein Management-Team haben und generieren ihr Geld über Spenden und Fundraising.',
    'j Meistens besitzen sie ein großes Hauptquartier und mehrere kleine Außenstellen.',
    'j In {{player.name}}s erstem Job unterstützt {{player.perpro}} die lokale Region mit der Erstellung von Berichten, dem Sammeln und der Koordination von Beiträgen und administrativen Tätigkeiten.',
    'j Später bekommt {{player.name}} eine Beförderung zum Spezialisten. In dieser Tätigkeit ist {{player.perpro}} als Experte in einem relevanten Thema des Kerngeschäfts verantwortlich für das Erstellen eigener Projekte.',
    'j Leider läuft der Vertrag, den man {{player.name}} gegeben hat, nach 2 Jahren schon aus. Durch die begrenzten finanziellen Mittel der Organisation, kann sie sich nicht leisten {{player.name}} weiter zu beschäftigen.',
    {
      Choice: {
        Dialog:
          'Nutze die übrige Zeit, um einen anderen Lebensweg einzuschlagen und spiele noch einmal von vorne.',
        restart: {
          Text: 'Nochmal von vorne beginnen',
          Do: 'jump Start',
        },
        outro: {
          Text: 'Spiel beenden',
          Do: 'jump outro',
        },
      },
    },
  ],

  // Ende11: Ausbildung fertig
  ende11: [
    'show scene car-shop with fadeIn',
    'k {{player.name}} hat es geschafft und hat {{player.posprofeakk}} Ausbildung erfolgreich abgeschlossen!',
    'k {{player.name}} ist gut in {{player.posprodatma}} Job und hat ihn auch lieben gelernt. Jedes Mal wenn, {{player.perpro}} jemanden helfen konnte, fühlt {{player.perpro}} die Anerkennung, die {{player.perprodat}} die Gesellschaft entgegen bringt.',
    'k Doch reicht {{player.perprodat}} das? {{player.name}} überlegt, ob {{player.perpro}} mehr vom Leben will? Vielleicht mehr Geld um sich noch größere Träume zu erfüllen? Ewig auf einen großen Urlaub zu sparen oder sich dreimal zu überlegen, ob die Rolex jetzt wirklich sein muss, dass ist eigentlich nichts für {{player.perproakk}}.',
    'show scene empty-classroom with fadeIn',
    'k {{player.name}} denkt über eine Weiterbildung nach. Da würden beispielsweise ein Studium oder eine Fortbildung zum Meister in Frage kommen.',
    'k Sollte {{player.name}} eine Weiterbildung in Angriff nehmen?',
    {
      Choice: {
        Ja: {
          Text: 'Ja',
          Do: 'jump wb_node1',
        },
        Nein: {
          Text: 'Nein',
          Do: 'jump keinBock',
        },
      },
    },
  ],

  keinBock: [
    'y {{player.name}} ist mit seiner Job-Situation sehr zufrieden und möchte sich nicht mehr weiterbilden.',
    'y Das heißt allerdings auch, dass {{player.perpro}} mehr oder weniger mehrere Jahrzehnte die gleiche Tätigkeit ausführen wird.',
    'y {{player.name}} hat diese Entscheidung allerdings gut durchdacht und zweifelt daran nicht mehr.',
    'jump outro',
  ],

  // Ende 12: Meisterbetrieb
  ende12: [
    'l {{player.name}} hat es geschafft und ist wirklich gut in seinem Job. {{player.PerPro}} hat ihn lieben gelernt und fühlt die Anerkennung durch Freunde, Familie und der Gesellschaft. Aber irgendwie fühlt sich das noch immer nicht richtig an. Relativ schnell wird {{player.name}} klar, dass {{player.perpro}} zu wesentlich mehr in der Lage ist, als die normalen Aufgaben, die für einen Kfz-Mechaniker anfallen.',
    'l Daher entscheidet {{player.name}} sich, {{player.posproma}} Potenzial noch besser zu entfalten und beginnt {{player.posprofe}} Meisterausbildung. Diese Ausbildung befähigt {{player.perproakk}} nicht nur {{player.posproma}} Handwerk selbstständig auszuführen und einen eigenen Betrieb zu leiten, sondern auch Lehrlinge einzustellen und auszubilden. Um weiterhin Geld verdienen zu können, entscheidet {{player.name}} sich dafür, die Meisterausbildung berufsbegleitend zu machen.',
    'Daher dauert diese dreieinhalb Jahre, anstatt einem Jahr. Es ist nicht leicht, abends zu lernen und erfordert viel Einsatzbereitschaft und Durchhaltevermögen, doch am Ende erhält {{player.name}} {{player.pospromaakk}} Meisterbrief und gründet erfolgreich {{player.posprofeakk}} eigene Werkstatt mit eigenen Angestellten und Lehrlingen.',
    {
      Choice: {
        Dialog:
          'Nutze die übrige Zeit, um einen anderen Lebensweg einzuschlagen und spiele noch einmal von vorne.',
        restart: {
          Text: 'Nochmal von vorne beginnen',
          Do: 'jump Start',
        },
        outro: {
          Text: 'Spiel beenden',
          Do: 'jump outro',
        },
      },
    },
  ],

  // Ende 13: Duales Studium
  ende13: [
    'm {{player.name}} hat einen Job in einer großen IT-Firma bekommen, die dafür bekannt ist, ein sehr hohes Gehalt zu zahlen.',
    'm Die Praxiserfahrung des dualen Studiums, sorgte dafür, dass {{player.perpro}} es bei seiner Bewerbung wesentlich leichter hatte, sich gegen {{player.posprofe}} Mitkonkurrenten durchzusetzen.',
    'm {{player.name}} dachte erst alles sei perfekt, doch nach einigen Jahren, vielen Überstunden und sehr schwierigen Arbeitszeiten, kamen die ersten Zweifel auf.',
    'm Will {{player.name}} wirklich so hart arbeiten, sich geistig und physisch so sehr verausgaben, dass die Gesundheit darunter leidet?',
    {
      Choice: {
        Dialog:
          'Nutze die übrige Zeit, um einen anderen Lebensweg einzuschlagen und spiele noch einmal von vorne.',
        restart: {
          Text: 'Nochmal von vorne beginnen',
          Do: 'jump Start',
        },
        outro: {
          Text: 'Spiel beenden',
          Do: 'jump outro',
        },
      },
    },
  ],

  // Start of code for path Ausbildung
  Ausbildung: [
    'y Cool! {{player.name}} hat sich für eine Ausbildung entschieden!',
    'y In Deutschland gibt es grundsätzlich 2 verschiedene Arten, wie man eine Ausbildung abschließen kann.',
    'y Die häufigste Form der Ausbildung ist die "duale Berufsausbildung".',
    'y Bei der dualen Berufsausbildung findet die praktische Ausbildung im Ausbildungsbetrieb statt, die Theorie wird in der Berufsschule vermittelt. Die Auszubildenden arbeiten während ihrer Ausbildung in Vollzeit in ihrem Ausbildungsbetrieb und erhalten dafür eine Ausbildungsvergütung. Ein- bis zweimal pro Woche besuchen sie die Berufsschule. Dort werden sowohl berufsspezifische als auch allgemeinbildende Fächer unterrichtet.',
    'y Neben den Ausbildungsberufen die dual ausgebildet werden, gibt es schulische Ausbildungsberufe, z.B. im Pflege- und Sozialbereich oder im Bereich "Gestaltung".',
    'y Diese Ausbildung findet an Berufsfachschulen oder Berufskollegs statt. Im Unterricht wird theoretisches Wissen vermittelt, die Schüler/innen führen aber auch praktische Übungen an der Schule durch. Zusätzlich leisten die Schüler/innen der Berufsfachschulen in der Regel Praktika in Betrieben ab. Welchen Umfang diese Praktika haben, ist je nach Beruf unterschiedlich. Eine Ausbildungsvergütung wird für schulische Ausbildungen nicht gezahlt, eine Ausnahme bilden die Pflegeausbildungen.',
    'jump con_1_ausbildung',
  ],
  // Ausbildung
  ausbildung: [
    'show scene car-shop with fadeIn',
    'y Dem Wunsch des Vaters folgend hat {{player.name}} direkt nach {{player.posprodatma}} Schulabschluss die Lehre zum Kfz-Mechatroniker begonnen.',
    'y Das bringt im Gegensatz zur Schulzeit einige Neuerungen mit sich. {{player.PerPro}} muss 8 Stunden am Tag arbeiten gehen und 2 Tage in der Woche zur Berufsschule. Frei hat {{player.name}} nur, wenn {{player.perpro}} sich Urlaub nimmt. Jedoch verdient {{player.perpro}} schon {{player.posproma}} erstes Geld und hat eine wesentlich größere finanzielle Freiheit als jemand, der studiert.',
    'Nach 3 Jahren beendet {{player.name}} {{player.posprofeakk}} Lehre mit einer erfolgreichen Gesellenprüfung und kann sich offiziell Kfz-Mechatroniker nennen.',
    'jump ende11',
  ],

  // Ausbildungs-Conundrums

  con_1_ausbildung: [
    'show scene school-corridor with fadeIn',
    'y {{player.name}} ist frisch an der Berufsschule und im Ausbildungsbetrieb. Der Alltag besteht aus abwechselnd Theorie lernen, aber auch praktische Sachen umsetzen.',
    'y Als eine der ersten prüfungsähnlichen Aufgaben, sollen die Auszubildenden ein eigenständiges Projekt auf die Beine stellen.',
    'y Aus unbekannten Gründen bekommt {{player.name}} von dieser Aufgabe nichts mit und erfährt erst viel später von einem Kollegen etwas darüber.',
    'y Dieser versucht {{player.name}} aber zu beruhigen und sagt, dass das Projekt erst in einem halben Jahr fertig gestellt sein muss.',
    // Change scence
    'y Dies Information beruhight {{player.name}} erst einmal.',
    {
      Choice: {
        Class: 'conundrumChoice',
        Dialog:
          'Jetzt ist sich {{player.name}} unsicher. Sollte er auf diesen Ratschlag vertrauen? {{player.name}} könnte natürlich beim Ausbilder nachfragen, würde dann aber eventuell negative Aufmerksamkeit auf sich ziehen.',
        1: {
          Text: 'Auf den Ratschlag des Kollegen hören.',
          onChosen: function () {
            saveAconundrumChoiceBlue(), acon1Fail();
          },
          // 'onChosen': function() {acon1Fail()},
          Do: 'jump con_2_ausbildung',
          onRevert: function () {
            delAconundrumChoiceBlue(), delAcon1Fail();
          },
        },
        2: {
          Text: 'Beim Ausbilder nachfragen.',
          onChosen: function () {
            saveAconundrumChoiceRed(), acon1Win();
          },
          // 'onChosen': function() {acon1Win()},
          Do: 'jump con_2_ausbildung',
          onRevert: function () {
            delAconundrumChoiceRed(), delAcon1Win();
          },
        },
      },
    },
  ],

  con_2_ausbildung: [
    'show scene party-room with fadeIn',
    'y Es ist Freitag und Montag steht eine Prüfung an.',
    'y {{player.name}} ist heute auf eine Party eingeladen. Einer {{player.posprodatfe}} Freunde wird 18 und das bedeutet, dass es eine große, bedeutsame Party wird.',
    'y Leider hat {{player.name}} vergessen zu lernen! Trotzdem ist {{player.name}} davon überzeugt, dass {{player.perpro}} diese Prüfung auch ohne viel Lernen schaffen wird.',
    {
      Choice: {
        Class: 'conundrumChoice',
        Dialog: 'Was wird {{player.name}} tun?',
        1: {
          Text: 'Die Party vergessen und lieber das ganze Wochenende lernen.',
          onChosen: function () {
            saveAconundrumChoiceRed(), acon3Win();
          },
          // 'onChosen': function() {acon2Win()},
          Do: 'jump con_3_ausbildung',
          onRevert: function () {
            delAconundrumChoiceRed(), delAcon3Win();
          },
        },
        2: {
          Text: '{{player.name}} geht zur Party und lernt einfach später.',
          onChosen: function () {
            saveAconundrumChoiceBlue(), acon3Fail();
          },
          // 'onChosen': function() {acon2Fail()},
          Do: 'jump con_3_ausbildung',
          onRevert: function () {
            delAconundrumChoiceBlue(), delAcon3Fail();
          },
        },
      },
    },
  ],

  con_3_ausbildung: [
    'show scene lecture-hall with fadeIn',
    'y Langsam nähern sich die Abschlussprüfungen.',
    'y Der Prüfungstag kam viel zu schnell und {{player.name}} hat nicht genug gelernt und ist verzweifelt.',
    'y Während der Prüfung ergibt sich eine Situation, in der {{player.name}} betrügen könnte und einfach die Antworten {{player.posprogen}} Banknachbarns kopiert.',
    'y Die Situation ist günstig, niemanden würde etwas mitbekommen in diesem großen Hörsaal.',
    {
      Choice: {
        Class: 'conundrumChoice',
        Dialog: 'Was wird {{player.name}} tun?',
        1: {
          Text: '{{player.name}} nutzt die Gelegenheit und schreibt ab.',
          onChosen: function () {
            saveConundrumChoiceRed(), acon2Fail();
          },
          // 'onChosen': function() {acon3Fail()},
          Do: 'jump failWin1_ausbildung',
          onRevert: function () {
            delAconundrumChoiceRed(), delAcon2Fail();
          },
        },
        2: {
          Text: '{{player.name}} schreibt nicht ab.',
          onChosen: function () {
            saveConundrumChoiceBlue(), acon2Win();
          },
          // 'onChosen': function() {acon3Win()},
          Do: 'jump failWin1_ausbildung',
          onRevert: function () {
            delAconundrumChoiceBlue(), delAcon2Win();
          },
        },
      },
    },
  ],

  // Condundrum Ausbildung Konsequenzen
  failWin1_ausbildung: [
    {
      Conditional: {
        Condition: function () {
          if (this.storage('acon1Win').length == 1) {
            return 'BusinessWin1';
          } else if (this.storage('acon1Fail').length == 1) {
            return 'BusinessFail1';
          }
        },
        BusinessWin1: 'jump ausbildungWin1',
        BusinessFail1: 'jump ausbildungFail1',
      },
    },
  ],

  ausbildungWin1: [
    'show scene school-corridor with fadeIn',
    'y Mal sehen, wie sich die Entscheidungen, die {{player.name}} getroffen hat, ausgewirkt haben.',
    'y {{player.name}} hat bezüglich das abzugebenden Projekts nochmal bei den Vorgesetzten nachgefragt und erfahren, dass die Abgabe sehr zeitnah ist.',
    'y Hastig machte {{player.name}} sich daran, das Projekt noch fertig zu stellen.',
    'jump failWin2_ausbildung',
  ],

  ausbildungFail1: [
    'show scene school-corridor with fadeIn',
    'y Mal sehen, wie sich die Entscheidungen, die {{player.name}} getroffen hat, ausgewirkt haben.',
    'y {{player.name}} hat auf den Ratschlag des Kollegen gehört und stellt fest, dass dieser falsch war.',
    'y {{player.PerPro}} hätte das Projekt schon längst fertig gestellt haben müssen.',
    'y Da {{player.perpro}} sich auf den Ratschlag von jemand anderen verlassen hat, kann {{player.name}} nun nicht von {{player.posprodatma}} Ausbildungsbetrieb übernommen werden.',
    'y {{player.name}} muss sich nach Ende der Ausbildung eine neue Firma suchen und wahrscheinlich auch in eine neue Stadt ziehen.',
    'jump failWin2_ausbildung',
  ],

  failWin2_ausbildung: [
    {
      Conditional: {
        Condition: function () {
          if (this.storage('acon2Win').length == 1) {
            return 'BusinessWin2';
          } else if (this.storage('acon2Fail').length == 1) {
            return 'BusinessFail2';
          }
        },
        BusinessWin2: 'jump ausbildungWin2',
        BusinessFail2: 'jump ausbildungFail2',
      },
    },
  ],

  ausbildungWin2: [
    'show scene lecture-hall with fadeIn',
    'y Da {{player.name}} sich dafür entschieden hat, bei der Prüfung nicht zu betrügen, musste {{player.perpro}} mit den Konsequenzen leben und ist durchgefallen.',
    'y Die Prüfung muss nun in einem Jahr wiederholt werden. Dies heißt auch, dass die Ausbildung dadurch ein Jahr länger dauert.',
    'y Nach der Verkündung der Ergebnisse kommt jedoch der Ausbilder auf {{player.name}} zu und teilt {{player.perprodat}} sein Bedauern über das schlechte Ergebnis mit.',
    'y Jedoch erfährt {{player.name}}, dass der Ausbilder es {{player.perprodat}} hoch anrechnet, dass {{player.perpro}} nicht betrogen hat.',
    'y Da sich {{player.name}} sehr gut mit dem Ausbilder versteht, bietet er {{player.perprodat}} an, {{player.perprodat}} später einen Job zu vermitteln.',
    'jump failWin3_ausbildung',
  ],

  ausbildungFail2: [
    'show scene lecture-hall with fadeIn',
    'y {{player.name}} hat sich dafür entschieden, bei der Prüfung zu betrügen.',
    'y {{player.name}} wurde nicht erwischt und besteht die Prüfung.',
    'y Kurz darauf hat wird {{player.name}} zu einem Vorstellungsgespräch eingeladen.',
    'y Die Leute, die {{player.name}} gegenüber sitzen machen einen freundlichen Eindruck und das Gespräch läuft sehr gut.',
    'y Jedoch werden {{player.name}} einige spezifische Fragen gestellt, die {{player.perpro}} nicht beantworten kann.',
    'y Wie ein Blitz trifft {{player.name}} die Erkenntnis, dass {{player.perpro}} diese Fragen nicht beantworten kann, da diese Inhalte damals Teil der Prüfung waren, bei der {{player.name}} betrogen hatte!',
    'y {{player.name}} wird nervös und der Rest des Gesprächs verläuft leider nicht mehr so gut.',
    'jump failWin3_ausbildung',
  ],

  failWin3_ausbildung: [
    {
      Conditional: {
        Condition: function () {
          if (this.storage('acon3Win').length == 1) {
            return 'BusinessWin3';
          } else if (this.storage('acon3Fail').length == 1) {
            return 'BusinessFail3';
          }
        },
        BusinessWin3: 'jump ausbildungWin3',
        BusinessFail3: 'jump ausbildungFail3',
      },
    },
  ],

  ausbildungWin3: [
    'show scene party-room with fadeIn',
    'y {{player.name}} hatte sich entschieden, nicht zur Party zu gehen und konnte somit den ganzen Abend und das ganze Wochenende für die Prüfung lernen.',
    'y Am Ende wirkte sich diese Entscheidung positiv auf das Ergebnis der Prüfung aus und {{player.perpro}} bestand mit voller Punktzahl!',
    'jump ende11',
  ],

  ausbildungFail3: [
    'show scene party-room with fadeIn',
    'y {{player.name}} hatte sich entschieden, auf die Party zu gehen und einfach später zu lernen.',
    'y Leider fühlte sich {{player.name}} nicht sehr gut nach der Party und konnte nicht wirklich effektiv lernen.',
    'y Dies hatte natürlich eine negative Auswirkung auf das Ergebnis der Prüfung, was sich auch im Abschlusszeugnis widerspiegelt.',
    'jump ende11',
  ],

  // Nodes
  wb_node1: [
    'show scene money-rain with fadeIn',
    'y {{player.name}} überlegt nun, was für Kritieren bei der Wahl der Weiterbildung wichtig sind.',
    {
      Choice: {
        Dialog:
          'Möchte {{player.name}} ein sehr großes Vermögen anhäufen oder sind andere Dinge im Leben wichtiger',
        rot: {
          Text: '{{player.name}} möchte ein großes Vermögen anhäufen.',
          onChosen: function () {
            saveRedChoice();
          },
          Do: 'jump wb_node2',
          onRevert: function () {
            delWeiterbildungRot();
          },
        },
        blau: {
          Text: 'Geld ist schon wichtig, aber es gibt auch andere wichtige Dinge im Leben',
          onChosen: function () {
            saveBlueChoice();
          },
          Do: 'jump wb_node2',
          onRevert: function () {
            delWeiterbildungBlau();
          },
        },
      },
    },
  ],

  wb_node2: [
    'show scene messy-office with fadeIn',
    {
      Choice: {
        Dialog:
          'Soll {{player.name}} sich in Zukunft auf eine berufliche Tätigkeit konzentrieren, die {{player.perpro}} sehr gut kann oder ist es {{player.perprodat}} wichtig, viele abwechslungsreiche und geistig herausfordernde Tätigkeiten zu tun?',
        rot: {
          Text: 'Auf eine Tätigkeit konzentrieren.',
          onChosen: function () {
            saveRedChoice();
          },
          Do: 'jump wb_node3',
          onRevert: function () {
            delWeiterbildungRot();
          },
        },
        blau: {
          Text: 'Abwechslungsreiche Arbeiten ausführen.',
          onChosen: function () {
            saveBlueChoice();
          },
          Do: 'jump wb_node3',
          onRevert: function () {
            delWeiterbildungBlau();
          },
        },
      },
    },
  ],

  wb_node3: [
    'show scene multi-office with fadeIn',
    {
      Choice: {
        Dialog:
          'Soll {{player.name}} lieber in einem Team arbeiten oder bevorzugt {{player.perpro}} individuelles, eigenständiges Arbeiten?',
        rot: {
          Text: '{{player.name}} kann sich besonders während der Arbeit mit einem Team selbst übertreffen.',
          onChosen: function () {
            saveRedChoice();
          },
          Do: 'jump wb_node4',
          onRevert: function () {
            delWeiterbildungRot();
          },
        },
        blau: {
          Text: '{{player.name}} arbeitet lieber für sich selber.',
          onChosen: function () {
            saveBlueChoice();
          },
          Do: 'jump wb_node4',
          onRevert: function () {
            delWeiterbildungBlau();
          },
        },
      },
    },
  ],

  wb_node4: [
    'show scene lab-office with fadeIn',
    {
      Choice: {
        Dialog: 'Wie würde sich {{player.name}} selbst einschätzen?',
        rot: {
          Text: '{{player.name}} sieht sich eher als Spezialist: {{player.name}} kennt sich lieber in einer Sache richtig gut aus, als in mehreren Sachen ein wenig.',
          onChosen: function () {
            saveRedChoice();
          },
          Do: 'jump wb_node5',
          onRevert: function () {
            delWeiterbildungRot();
          },
        },
        blau: {
          Text: '{{player.name}} ist eher der Generalist: {{player.PerPro}} kennt sich lieber in vielen Sachen ein wenig aus, als in einer Sache sehr gut.',
          onChosen: function () {
            saveBlueChoice();
          },
          Do: 'jump wb_node5',
          onRevert: function () {
            delWeiterbildungBlau();
          },
        },
      },
    },
  ],

  wb_node5: [
    {
      Choice: {
        Dialog:
          'In welcher Arbeitsumgebung fühlt sich {{player.name}} am wohlsten?',
        rot: {
          Text: '{{player.name}} ist es wichtig, immer einen Ansprechpartner zu haben und klare Arbeitsaufträge zu bekommen.',
          onChosen: function () {
            saveRedChoice();
          },
          Do: 'jump wb_node6',
          onRevert: function () {
            delWeiterbildungRot();
          },
        },
        blau: {
          Text: '{{player.name}} kann sich seine Zeit und seine Arbeitsaufgaben selbst einteilen und beschaffen.',
          onChosen: function () {
            saveBlueChoice();
          },
          Do: 'jump wb_node6',
          onRevert: function () {
            delWeiterbildungBlau();
          },
        },
      },
    },
  ],

  wb_node6: [
    {
      Choice: {
        Studium: {
          Text: 'Aufgrund der Entscheidungen und Erkenntnisse, zu denen {{player.name}} gelangt ist, entscheidet {{player.perpro}} sich für ein Studium.',
          Do: 'jump studiumZweiterWeg',
          Condition: function () {
            return this.storage('weiterbildungRot').length >= 3;
          },
        },
        Meister: {
          Text: 'Aufgrund der Entscheidungen und Erkenntnisse, zu denen {{player.name}} gelangt ist, entscheidet {{player.perpro}} sich für eine Weiterbildung zum Meister.',
          Do: 'jump ende12',
          Condition: function () {
            return this.storage('weiterbildungBlau').length >= 3;
          },
        },
      },
    },
  ],

  outro: [
    'show scene city-sunset with fadeIn',
    'y Vielen Dank fürs Spielen! Wir hoffen, es hat euch gefallen!',
    'y Spiel beendet',
    'end',
  ],
});
