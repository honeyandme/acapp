class AcGameMenu{
    constructor(root){
        this.root = root;
        this.$menu = $(`
    <div class="ac-game-menu">
        <div class="ac-game-menu-field">
            <br>
            <div class="ac-game-menu-field-item ac-game-menu-field-item-single-mode">
                单人模式
            </div>
            </br>
            <br>
            <div class="ac-game-menu-field-item ac-game-menu-field-item-multi-mode">
                多人模式
            </div>
            </br>
            <div class="ac-game-menu-field-item ac-game-menu-field-item-settings">
                设置
            </div>
        </div>
    </div>
`);
        this.root.$ac_game.append(this.$menu);
        this.$single = this.$menu.find('.ac-game-menu-field-item-single-mode');
        this.$multi = this.$menu.find('.ac-game-menu-field-item-multi-mode');
        this.$settings = this.$menu.find('.ac-game-menu-field-item-settings');
        this.start();
    }
    start(){
        this.add_listening_events();
    }
    add_listening_events(){
        let outer = this;
        this.$multi.click(function(){
            console.log("dianlewohaha");
        });
        this.$single.click(function(){
            outer.hide();
            console.log("dianlewo");
            outer.root.playground.show();
        });

        this.$settings.click(function(){
            console.log("hahadianlewo");
        });

    }
    show(){
        this.$menu.show();
    }
    hide(){
        this.$menu.hide();
    }
}
