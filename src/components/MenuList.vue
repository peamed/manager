<script>
import {
  VList,
  VIcon,
  VListGroup,
  VListItem,
  VListItemContent,
  VListItemTitle,
  VListItemIcon
} from "vuetify/lib";
export default {
  props: {
    menus: {
      required: true,
      type: Array
    }
  },
  components: {
    VList,
    VIcon,
    VListGroup,
    VListItem,
    VListItemContent,
    VListItemTitle,
    VListItemIcon
  },
  methods: {
    //创建菜单
    createMenu(h, menus = this.menus || []) {
      const group = [];
      menus.forEach(item => {
        if (item.child) {
          group.push(this.createGroup(h, item));
        } else {
          group.push(this.createItem(h, item));
        }
      });
      return group;
    },
    //创建单项，即没有子元素的
    createItem(h, item) {
      return h(VListItem, { on: { click: this.linkJump } }, [
        h(VListItemIcon, [h(VIcon, "mdi-" + item.icon)]),
        h(VListItemTitle, item.text)
      ]);
    },
    //创建菜单组
    createGroup(h, item) {
      const opts = {
        attrs: {
          noAction: true
        },
        props: {
          key: item.title,
          prependIcon: "mdi-" + item.icon
        }
      };

      return h(VListGroup, opts, [
        this.createGroupName(h, item),
        ...this.createGroupItem(h, item.child)
      ]);
    },
    //创建组名
    createGroupName(h, item) {
      return this.createCont(h, item.text, "activator");
    },
    //创建菜单组的项
    createGroupItem(h, ary) {
      let items = [],
        opts = null;

      if (!ary) return items;

      ary.forEach(item => {
        opts = {
          props: {
            key: item.title
          },
          on: { click: this.linkJump }
        };
        items.push(h(VListItem, opts, [this.createCont(h, item.text)]));
      });
      return items;
    },
    //创建content
    createCont(h, text, name) {
      let opts = name ? { slot: name, props: { model: false } } : {};
      return h(VListItemContent, opts, [h(VListItemTitle, text || "...")]);
    },
    //路由跳转
    linkJump() {
      console.log("点中");
    }
  },
  render(h) {
    //返回一个自定以的菜单列表模板
    return h(VList, this.createMenu(h));
  }
};
</script>
