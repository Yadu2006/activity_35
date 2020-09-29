class Form
{

    constructor()
    {

    }

    display()
    {
        var title = createElement('h2');
        title.html("THE GAME");
        title.position(130, 0);

        var input = createInput("Name");
        var button = createButton('Submit');
        input.position(150, 100);
        button.position(200, 150);

        button.mousePressed(function()
        {

            input.hide();
            button.hide();

            var name = input.value();
            playerCount++;

            player.update(name);
            player.updateCount(playerCount);

            var greeting = createElement('h3');
            greeting.html("Hello " + name);
            greeting.position(130, 150);

        })

    }


}