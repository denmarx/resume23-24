monogatari.script ({
  'Start': [
      {'Input': {
          'Text': 'What is your name?',
          'Validation': (input) => {
              return input.trim().length > 0;
          },
          'Save': (input) => {
              monogatari.storage ({
                  player: {
                      name: input,
                      age: 18
                  }
              });                                   
          },
      }},
      'Your name is {{player.name}}',
      {'Function':{
          'Apply': () => {
              // We'll overwrite the player's name but save the old one in a new
              // value so that we can roll back and restore it if needed.
              const { name } = monogatari.storage ('player');
              const { hp, inventory: { gold } } = monogatari.storage ('stats');
              monogatari.storage ({
                  player: {
                      name: 'Georg',
                  },
                  oldName: name,
                  stats: {
                      hp: hp - 50,
                      inventory {
                          gold: gold + 250
                      }
                  }
              });
          },
          'Revert': () => {
              // When rolling back, we'll restore the name to what it was before.
              const oldName = monogatari.storage ('oldName');
              const { hp, inventory: { gold } } = monogatari.storage ('stats');
              monogatari.storage ({
                  player: {
                      name: oldName,
                  },
                  stats: {
                      hp: hp + 50,
                      inventory {
                          gold: gold - 250
                      }
                  }
              });
          }
      }},

      '{{player.name}} is {{player_info.age}} years old.',
      '{{stats.mp}} costs the ability "Fire Storm".',
      '{{stats.inventory.gold}}g is in his bag of gold.',
      'end'
  ]
});