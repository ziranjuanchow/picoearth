var g_techTree = {
    "gather-fruit": {
        "title": "Gather fruits",
        "description": "Make them find some berries",
        "unlocked": false,
        "enabled": true,
        "preview": {
            "year": -10000
        },
        "require": {
            "population": 100,
        },
        "gain": {
            "food": 1,
        },
        "cost": {
            "plants": 1,
        },
        "workers": 0
    },
    "chop-wood": {
        "title": "Chop woods",
        "description": "To build tools",
        "unlocked": false,
        "enabled": true,
        "preview": {
            "year": -10000
        },
        "require": {
            "population": 200,
        },
        "gain": {
            "wood": 1,
        },
        "cost": {
            "trees": 1,
        },
        "workers": 0
    },
    "make-tools": {
        "title": "Make tools",
        "description": "Tools for hunting",
        "unlocked": false,
        "enabled": true,
        "preview": {
            "year": -10000
        },
        "require": {
            "population": 300,
        },
        "gain": {
            "tools": 1
        },
        "cost": {
            "wood": 1,
        },
        "workers": 0
    },
    "hunting": {
        "title": "Hunt animals",
        "description": "Preys and predators",
        "unlocked": false,
        "enabled": true,
        "preview": {
            "year": -10000
        },
        "require": {
            "population": 400,
        },
        "gain": {
            "food": 2
        },
        "cost": {
            "tools": 1,
            "animals": 1
        },
        "workers": 0
    },
    "build-house": {
        "title": "Build house",
        "description": "Build us a shelter",
        "unlocked": false,
        "enabled": true,
        "preview": {
            "year": -9900
        },
        "require": {
            "population": 1000,
        },
        "gain": {
            "house": 1
        },
        "cost": {
            "wood": 2,
            "tools": 1,
        },
        "workers": 0
    },
    "make-clothes": {
        "title": "Make clothes",
        "description": "Dress warm for the winter",
        "unlocked": false,
        "enabled": true,
        "preview": {
            "year": -10000
        },
        "require": {
            "population": 600,
        },
        "gain": {
            "clothes": 1
        },
        "cost": {
            "plants": 1,
        },
        "workers": 0
    },
    "explore": {
        "title": "Explore",
        "description": "Let's learn about the world",
        "unlocked": false,
        "enabled": true,
        "preview": {
            "year": -9990
        },
        "require": {
            "population": 700,
        },
        "gain": {
            "knowledge": .002,  
        },
        "cost": {
            "food": 1,
            "cloth": 1
        },
        "workers": 0
    },
    "dance": {
        "title": "Dance",
        "description": "What's happiness without music?",
        "unlocked": false,
        "enabled": true,
        "preview": {
            "year": -9900
        },
        "require": {
            "population": 700,
        },
        "gain": {
            "knowledge": .001,
        },
        "cost": {
            "clothes": 1,
        },
        "workers": 0
    },
    "raise-animals": {
        "title": "Raise animals",
        "description": "We can domesticate the animals",
        "unlocked": false,
        "enabled": true,
        "preview": {
            "year": -10000
        },
        "require": {
            "population": 700,
        },
        "gain": {
            "animals": 1,
        },
        "cost": {
            "food": 1,
        },
        "workers": 0
    },
    "plant-trees": {
        "title": "Plant trees",
        "description": "Plant a tree for the future",
        "unlocked": false,
        "enabled": true,
        "preview": {
            "year": -10000
        },
        "require": {
            "population": 800,
        },
        "gain": {
            "trees": 1,
            "plants": 1
        },
        "cost": {

        },
        "workers": 0
    },
    "worship": {
        "title": "Worship",
        "description": "There must be more out there",
        "unlocked": false,
        "enabled": true,
        "preview": {
            "year": -96000
        },
        "require": {
            "population": 1200,
        },
        "gain": {
            "knowledge": .003,
        },
        "cost": {
            "animals": 1,
            "food": 1
        },
        "workers": 0
    },
}