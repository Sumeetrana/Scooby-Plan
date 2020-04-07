const initState = {
    projects: [
        {id: 1, title: "title 1", content: "blah blah blah"},
        {id: 2, title: "title 2", content: "blah blah blah"},
        {id: 3, title: "title 3", content: "blah blah blah"}
    ]
}

const projectReducer = (state = initState, action) => {
    switch(action.type) {
        case 'CREATE_PROJECT':
            console.log("project created", action.project);
            
    }
    return state;
}

export default projectReducer;