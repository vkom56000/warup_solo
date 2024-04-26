body {
    display: flex;
    justify-content: center;
    align-items: left;
    margin: 1em 1em 0em 1em;
    flex-direction: column;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
}

h1 {
    margin:-.7vh;
    padding-left: 40%;
    padding-right: 40%;
    background-color: rgba(45, 46, 81, 0.906);
    border-radius: .2em;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    color: white;
    text-align:center;
}

li{
    font-size: 1.2em;
    margin-left: 2em;
    width: 65%;
    list-style-type: none;  /* Gets rid of bullet points */
    padding-bottom: 1vh;
}

hr{
    border: none; /* Remove the default border */
    border-top: 1px solid rgba(45, 46, 81, 0.172); /* Set the top border to create a line */
    margin: .7em 0;
}

#taskList{
    /* background-color: rgba(0, 0, 0, 0.031);
    padding: 2%;
    border-radius: .5em;
    box-shadow: 1px 1px 10px rgba(0.1, 0, 0, 0.1);
     */
}

.task-container{
    background-color: rgba(255, 255, 255, 0.031);
    margin: 1em;
    padding: .25% 2% 1% 2%;
    border-radius: .5em;
    box-shadow: 0px 0px 10px rgba(0.1, 0, 0, 0.1);
}

.strikethrough {
	text-decoration: line-through;
}

input[type='checkbox'] {
    accent-color: rgba(45, 46, 81, 0.906);
}

input[type='checkbox']:hover{
    scale: 110%;
}
