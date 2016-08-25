Ext.define('MyApp.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'MyApp.view.main.MainController',
        'MyApp.view.main.MainModel',
        'MyApp.view.main.List'
    ],

    controller: 'main',
    viewModel: 'main',

    ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: '{name}'
            },
            flex: 0
        },
        iconCls: 'fa-film'
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },

    defaults: {
        bodyPadding: 20,
        tabConfig: {
            plugins: 'responsive',
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },
    items: [{
        title: 'Movie List',
        iconCls: 'fa-list-ul',
        scrollable: true,
        items: [{
            xtype: 'mainlist'
        },{
            html: '<p>Source: The Internet Movie Database <a href="www.imdb.com">imdb.com</a></p>',
            xtype: 'panel'
        }]
    }, {
        title: 'Pie Charts (Qualitative Data)',
        iconCls: 'fa-pie-chart',
        scrollable: true,
        items: [{
            xtype: 'polar',
            renderTo: document.body,
            reference: 'chart',
            width: '100%',
            height: 550,
            insetPadding: 40,
            innerPadding: 30,
            legend: {
                docked: 'right'
            },
            interactions: ['rotate', 'itemhighlight'],
            sprites: [{
                type: 'text',
                text: 'Movies grouped by Editorial',
                fontSize: 22,
                width: 100,
                height: 30,
                x: 20, // the sprite x position
                y: 20  // the sprite y position
            }],
            store: {
                fields: ['name', 'g1'],
                data: [
                    {"name": "Icon Comics", "g1": 3.33},
                    {"name": "Marvel Comics", "g1": 63.33},
                    {"name": "Mirage Studios", "g1": 3.33},
                    {"name": "Not Available", "g1": 5},
                    {"name": "Quality Comics", "g1": 1.67},
                    {"name": "2000 AD", "g1": 1.67},
                    {"name": "Dark Horse Comics", "g1": 3.33},
                    {"name": "DC Comics", "g1": 16.67},
                    {"name": "Dynamite Comics", "g1": 1.67},
                ]
            },
            series: [{
                type: 'pie',
                xField: 'g1',
                animation: {
                    easing: 'easeOut',
                    duration: 300
                },
                highlight: {
                    margin: 20
                },
                label: {
                    field: 'name',      // bind label text to name
                    display: 'outside',
                    font: '12px Helvetica'
                },
                style: {
                    strokeStyle: 'white',
                    lineWidth: 1
                },
                tooltip: {
                    trackMouse: true,
                    renderer: 'onSeriesTooltipRender'
                }
            }]
        },{
            html: '<hr/>',
            xtype: 'panel'
        },{
            xtype: 'polar',
            renderTo: document.body,
            reference: 'chart',
            width: '100%',
            height: 550,
            insetPadding: 40,
            innerPadding: 30,
            legend: {
                docked: 'left'
            },
            interactions: ['rotate', 'itemhighlight'],
            sprites: [{
                type: 'text',
                text: 'Movies grouped by Distributor',
                fontSize: 22,
                width: 100,
                height: 30,
                x: 20,
                y: 20
            }],
            store: {
                fields: ['name', 'g1'],
                data: [
                    {"name": "20th Century Fox", "g1": 25},
                    {"name": "Buena Vista Pictures", "g1": 1.67},
                    {"name": "Columbia Pictures", "g1": 18.33},
                    {"name": "Lionsgate", "g1": 5},
                    {"name": "Paramount Pictures", "g1": 10},
                    {"name": "Universal Pictures", "g1": 8.33},
                    {"name": "Walt Disney Studios", "g1": 15},
                    {"name": "Warner Bros. Pictures", "g1": 16.67}
                ]
            },
            series: [{
                type: 'pie',
                xField: 'g1',
                animation: {
                    easing: 'easeOut',
                    duration: 300
                },
                highlight: {
                    margin: 20
                },
                label: {
                    field: 'name',      // bind label text to name
                    display: 'outside',
                    font: '12px Helvetica'
                },
                style: {
                    strokeStyle: 'white',
                    lineWidth: 1
                },
                tooltip: {
                    trackMouse: true,
                    renderer: 'onSeriesTooltipRender'
                }
            }]
        }]
    }, {
        title: 'Bar Charts (Quantitative Data)',
        iconCls: 'fa-bar-chart',
        scrollable: true,
        items:[{
            xtype: 'cartesian',
            reference: 'chart',
            width: 600,
            height: 500,
            insetPadding: 30,
            store: {
                fields: ['Title', 'Box-office'],
                data: [
                    {
                        "Title": "X-Men",
                        "Box-office": 296.3
                    },
                    {
                        "Title": "Spider-Man",
                        "Box-office": 821.7
                    },
                    {
                        "Title": "Daredevil",
                        "Box-office": 179.2
                    },
                    {
                        "Title": "X2",
                        "Box-office": 407.7
                    },
                    {
                        "Title": "Hulk",
                        "Box-office": 245.4
                    },
                    {
                        "Title": "The Punisher",
                        "Box-office": 54.7
                    },
                    {
                        "Title": "Spider-Man 2",
                        "Box-office": 783.8
                    },
                    {
                        "Title": "Catwoman",
                        "Box-office": 82.1
                    },
                    {
                        "Title": "Hellboy",
                        "Box-office": 99.3
                    },
                    {
                        "Title": "Sky High",
                        "Box-office": 86.4
                    },
                    {
                        "Title": "Elektra",
                        "Box-office": 56.7
                    },
                    {
                        "Title": "Batman Begins",
                        "Box-office": 374.2
                    },
                    {
                        "Title": "Fantastic Four",
                        "Box-office": 330.6
                    },
                    {
                        "Title": "X-Men: The Last Stand",
                        "Box-office": 459.4
                    },
                    {
                        "Title": "Superman Returns",
                        "Box-office": 391.1
                    },
                    {
                        "Title": "Ghost Rider",
                        "Box-office": 228.7
                    },
                    {
                        "Title": "Spider-Man 3",
                        "Box-office": 890.9
                    },
                    {
                        "Title": "Fantastic Four: Rise of the Silver Surfer",
                        "Box-office": 289
                    },
                    {
                        "Title": "Iron Man",
                        "Box-office": 585.2
                    },
                    {
                        "Title": "The Incredible Hulk",
                        "Box-office": 263.4
                    },
                    {
                        "Title": "The Dark Knight",
                        "Box-office": 1005
                    },
                    {
                        "Title": "Hancock",
                        "Box-office": 624.3
                    },
                    {
                        "Title": "Hellboy II: The Golden Army",
                        "Box-office": 160.4
                    },
                    {
                        "Title": "Punisher: War Zone",
                        "Box-office": 10.1
                    },
                    {
                        "Title": "The Spirit",
                        "Box-office": 39
                    },
                    {
                        "Title": "Watchmen",
                        "Box-office": 185.3
                    },
                    {
                        "Title": "X-Men Origins: Wolverine",
                        "Box-office": 373.1
                    },
                    {
                        "Title": "Kick-Ass",
                        "Box-office": 96.2
                    },
                    {
                        "Title": "Iron Man 2",
                        "Box-office": 623.9
                    },
                    {
                        "Title": "The Green Hornet",
                        "Box-office": 227.8
                    },
                    {
                        "Title": "Thor",
                        "Box-office": 449.3
                    },
                    {
                        "Title": "X-Men: First Class",
                        "Box-office": 353.6
                    },
                    {
                        "Title": "Green Lantern",
                        "Box-office": 219.8
                    },
                    {
                        "Title": "Captain America: The first Avenger",
                        "Box-office": 370.6
                    },
                    {
                        "Title": "Chronicle",
                        "Box-office": 126.6
                    },
                    {
                        "Title": "Ghost Rider: Spirit of Vengeance",
                        "Box-office": 132.6
                    },
                    {
                        "Title": "The Amazing Spider-Man",
                        "Box-office": 757.9
                    },
                    {
                        "Title": "The Dark Knight Rises",
                        "Box-office": 1085
                    },
                    {
                        "Title": "Dredd",
                        "Box-office": 41.5
                    },
                    {
                        "Title": "Marvel's The Avengers",
                        "Box-office": 1520
                    },
                    {
                        "Title": "Iron Man 3",
                        "Box-office": 1215
                    },
                    {
                        "Title": "Man of Steel",
                        "Box-office": 668
                    },
                    {
                        "Title": "The Wolverine",
                        "Box-office": 414.8
                    },
                    {
                        "Title": "Kick-Ass 2",
                        "Box-office": 60.7
                    },
                    {
                        "Title": "Thor: The Dark World",
                        "Box-office": 644.6
                    },
                    {
                        "Title": "Captain America: The Winter Soldier",
                        "Box-office": 714.4
                    },
                    {
                        "Title": "The Amazing Spider-Man 2",
                        "Box-office": 709
                    },
                    {
                        "Title": "Teenage Mutant Ninja Turtles: Out of the Shadows",
                        "Box-office": 493.3
                    },
                    {
                        "Title": "X-Men Days of Future Past",
                        "Box-office": 747.9
                    },
                    {
                        "Title": "Guardians of the Galaxy",
                        "Box-office": 773.3
                    },
                    {
                        "Title": "Big Hero 6",
                        "Box-office": 657.8
                    },
                    {
                        "Title": "Avengers: Age of Ultron",
                        "Box-office": 1405
                    },
                    {
                        "Title": "Ant-Man",
                        "Box-office": 519.4
                    },
                    {
                        "Title": "Fantastic Four",
                        "Box-office": 168
                    },
                    {
                        "Title": "Deadpool",
                        "Box-office": 782.6
                    },
                    {
                        "Title": "Batman v. Superman: Dawn of Justice",
                        "Box-office": 872.7
                    },
                    {
                        "Title": "Captain America: Civil War",
                        "Box-office": 1152
                    },
                    {
                        "Title": "Teenage Mutant Ninja Turtles: Out of the Shadows",
                        "Box-office": 239.3
                    },
                    {
                        "Title": "X-Men: Apocalypse",
                        "Box-office": 542.7
                    },
                    {
                        "Title": "Suicide Squad",
                        "Box-office": 575.4
                    }
                ]
            },

            //define the x and y-axis configuration.
            axes: [{
                type: 'numeric',
                position: 'left',
                title: {
                    text: 'Box Office ($M)',
                    fontSize: 15
                },
                fields: 'Box-office'
            }, {
                type: 'category',
                position: 'bottom',
                title: {
                    text: 'Title (Ordered by Release date)',
                    fontSize: 15
                },
                fields: 'Title'
            }],

            //define the actual bar series.
            series: [{
                type: 'bar',
                xField: 'Title',
                yField: 'Box-office',
                axis: 'bottom',
                subStyle: {
                    fill: ["#115fa6"]
                },
                tooltip: {
                    trackMouse: true,
                    renderer: 'onSeriesTooltipRenderBar'
                },
                highlight: {
                    strokeStyle: 'black',
                    fillStyle: 'gold'
                }
            }]
        },{
            html: '<hr/>',
            xtype: 'panel'
        },{
            xtype: 'cartesian',
            reference: 'chart',
            insetPadding: 30,
            width: 600,
            height: 500,
            store: {
                fields: ['Title', 'Ratio'],
                data: [
                    {
                        "Title": "X-Men",
                        "Ratio": 395.07
                    },
                    {
                        "Title": "Spider-Man",
                       "Ratio": 591.15
                    },
                    {
                        "Title": "Daredevil",
                       "Ratio": 229.74
                    },
                    {
                        "Title": "X2",
                       "Ratio": 370.64
                    },
                    {
                        "Title": "Hulk",
                       "Ratio": 179.12
                    },
                    {
                        "Title": "The Punisher",
                       "Ratio": 165.76
                    },
                    {
                        "Title": "Spider-Man 2",
                       "Ratio": 391.90
                    },
                    {
                        "Title": "Catwoman",
                       "Ratio": 82.10
                    },
                    {
                        "Title": "Hellboy",
                       "Ratio": 150.45
                    },
                    {
                        "Title": "Sky High",
                       "Ratio": 246.86
                    },
                    {
                        "Title": "Elektra",
                       "Ratio": 131.86
                    },
                    {
                        "Title": "Batman Begins",
                       "Ratio": 249.47
                    },
                    {
                        "Title": "Fantastic Four",
                       "Ratio": 330.60
                    },
                    {
                        "Title": "X-Men: The Last Stand",
                       "Ratio": 218.76
                    },
                    {
                        "Title": "Superman Returns",
                       "Ratio": 191.72
                    },
                    {
                        "Title": "Ghost Rider",
                       "Ratio": 207.91
                    },
                    {
                        "Title": "Spider-Man 3",
                       "Ratio": 345.31
                    },
                    {
                        "Title": "Fantastic Four: Rise of the Silver Surfer",
                       "Ratio": 222.31
                    },
                    {
                        "Title": "Iron Man",
                       "Ratio": 418.00
                    },
                    {
                        "Title": "The Incredible Hulk",
                       "Ratio": 175.60
                    },
                    {
                        "Title": "The Dark Knight",
                       "Ratio": 543.24
                    },
                    {
                        "Title": "Hancock",
                       "Ratio": 416.20
                    },
                    {
                        "Title": "Hellboy II: The Golden Army",
                       "Ratio": 188.71
                    },
                    {
                        "Title": "Punisher: War Zone",
                       "Ratio": 28.86
                    },
                    {
                        "Title": "The Spirit",
                       "Ratio": 65.00
                    },
                    {
                        "Title": "Watchmen",
                       "Ratio": 142.54
                    },
                    {
                        "Title": "X-Men Origins: Wolverine",
                       "Ratio": 248.73
                    },
                    {
                        "Title": "Kick-Ass",
                       "Ratio": 343.57
                    },
                    {
                        "Title": "Iron Man 2",
                       "Ratio": 311.95
                    },
                    {
                        "Title": "The Green Hornet",
                       "Ratio": 189.83
                    },
                    {
                        "Title": "Thor",
                       "Ratio": 299.53
                    },
                    {
                        "Title": "X-Men: First Class",
                       "Ratio": 252.57
                    },
                    {
                        "Title": "Green Lantern",
                       "Ratio": 109.90
                    },
                    {
                        "Title": "Captain America: The first Avenger",
                       "Ratio": 264.71
                    },
                    {
                        "Title": "Chronicle",
                       "Ratio": 1055.00
                    },
                    {
                        "Title": "Ghost Rider: Spirit of Vengeance",
                       "Ratio": 232.63
                    },
                    {
                        "Title": "The Amazing Spider-Man",
                       "Ratio": 329.52
                    },
                    {
                        "Title": "The Dark Knight Rises",
                       "Ratio": 471.74
                    },
                    {
                        "Title": "Dredd",
                       "Ratio": 138.33
                    },
                    {
                        "Title": "Marvel's The Avengers",
                       "Ratio": 690.91
                    },
                    {
                        "Title": "Iron Man 3",
                       "Ratio": 607.50
                    },
                    {
                        "Title": "Man of Steel",
                       "Ratio": 296.89
                    },
                    {
                        "Title": "The Wolverine",
                       "Ratio": 345.67
                    },
                    {
                        "Title": "Kick-Ass 2",
                       "Ratio": 216.79
                    },
                    {
                        "Title": "Thor: The Dark World",
                       "Ratio": 379.18
                    },
                    {
                        "Title": "Captain America: The Winter Soldier",
                       "Ratio": 420.24
                    },
                    {
                        "Title": "The Amazing Spider-Man 2",
                       "Ratio": 354.50
                    },
                    {
                        "Title": "Teenage Mutant Ninja Turtles: Out of the Shadows",
                       "Ratio": 394.64
                    },
                    {
                        "Title": "X-Men Days of Future Past",
                       "Ratio": 373.95
                    },
                    {
                        "Title": "Guardians of the Galaxy",
                       "Ratio": 394.74
                    },
                    {
                        "Title": "Big Hero 6",
                       "Ratio": 398.67
                    },
                    {
                        "Title": "Avengers: Age of Ultron",
                       "Ratio": 525.43
                    },
                    {
                        "Title": "Ant-Man",
                       "Ratio": 399.54
                    },
                    {
                        "Title": "Fantastic Four",
                       "Ratio": 140.00
                    },
                    {
                        "Title": "Deadpool",
                       "Ratio": 1349.31
                    },
                    {
                        "Title": "Batman v. Superman: Dawn of Justice",
                       "Ratio": 349.08
                    },
                    {
                        "Title": "Captain America: Civil War",
                       "Ratio": 460.80
                    },
                    {
                        "Title": "Teenage Mutant Ninja Turtles: Out of the Shadows",
                       "Ratio": 177.26
                    },
                    {
                        "Title": "X-Men: Apocalypse",
                       "Ratio": 304.89
                    },
                    {
                        "Title": "Suicide Squad",
                       "Ratio": 328.80
                    }
                ]
            },

            //define the x and y-axis configuration.
            axes: [{
                type: 'numeric',
                position: 'left',
                title: {
                    text: 'Box Office / Budget Ratio (%)',
                    fontSize: 15
                },
                fields: 'Ratio'
            }, {
                type: 'category',
                position: 'bottom',
                title: {
                    text: 'Title (Ordered by Release date)',
                    fontSize: 15
                },
                fields: 'Title'
            }],

            //define the actual bar series.
            series: [{
                type: 'bar',
                xField: 'Title',
                yField: 'Ratio',
                axis: 'bottom',
                subStyle: {
                    fill: ["#115fa6"]
                },
                tooltip: {
                    trackMouse: true,
                    renderer: 'onSeriesTooltipRenderBarRatio'
                },
                highlight: {
                    strokeStyle: 'black',
                    fillStyle: 'gold'
                }
            }]
        }]
    }, {
        title: 'Graphs',
        iconCls: 'fa-arrows-alt',
        bind: {
            html: '{loremIpsum}'
        }
    }]
});
