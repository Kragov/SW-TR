const defaultState = {
    search: '',
    projects: [{
        projectTitle: 'Spring Boot',
        projectText: 'Takes an opinionated view of building Spring applications and gets you up and running as quickly as possible.',
        projectLogoClass: ['project-logo-icon', 'logo-spring-boot']
    },
    {
        projectTitle: 'Spring Framework',
        projectText: 'Provides core support for dependency injection, transaction management, web apps, data access, messaging and more.',
        projectLogoClass: ['project-logo-icon', 'logo-spring-framework']
    },
    {
        projectTitle: 'Spring Cloud Data Flow',
        projectText: 'An orchestration service for composable data microservice applications on modern runtimes.',
        projectLogoClass: ['project-logo-icon', 'logo-spring-cloud-data']
    },
    {
        projectTitle: 'Spring Cloud',
        projectText: 'Provides a set of tools for common patterns in distributed systems. Useful for building and deploying microservices.',
        projectLogoClass: ['project-logo-icon', 'logo-spring-cloud']},
    {
        projectTitle: 'Spring Data',
        projectText: 'Provides a consistent approach to data access – relational, non-relational, map-reduce, and beyond else.',
        projectLogoClass: ['project-logo-icon', 'logo-spring-data']
    },
    {
        projectTitle: 'Spring Integration',
        projectText: 'Supports the well-known <em>Enterprise Integration Patterns</em> via lightweight messaging and declarative adapters.',
        projectLogoClass: ['project-logo-icon', 'logo-spring-integration']
    }]
}

const searchResults = (state = defaultState, action) => {
    if (action.type === 'CHANGE_SEARCH') {
        return { ...state, search: action.payload}
    }

    return state;
}

export default searchResults