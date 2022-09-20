const environment = process.env.environment;


let db_creds = {};
if (environment == "dev") {
    db_creds = {
        'DB_HOST': "localhost",
        'DB_USER': "elavate_test_user",
        'DB_PASS': "elavate_test_user",
        'DB_NAME': "bmt_hrms",
        'DB_PORT': "5432",
        'dialect': "postgres",
        'pool': {
            'max': 5,
            'min': 0,
            'acquire': 30000,
            'idle': 10000
        }
    }
    
} else {
    db_creds = {
        'DB_HOST': "localhost",
        'DB_USER': "elavate_test_user",
        'DB_PASS': "elavate_test_user",
        'DB_NAME': "bmt_hrms",
        'DB_PORT': "5432",
        'dialect': "postgres",
        'pool': {
            'max': 5,
            'min': 0,
            'acquire': 30000,
            'idle': 10000
        }
    }
}

const config = {
    "app": {
        "port": 8000
    },
    "db": db_creds
}

module.exports = config;