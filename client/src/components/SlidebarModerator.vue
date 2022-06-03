<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-list-item>
          <v-list-item-content>
              <v-list-item-title>
                  СЕВЕРО ВОСТОК
              </v-list-item-title>
              <v-list-item-subtitle>
                  Новости
              </v-list-item-subtitle>
          </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list dense>
      <v-list-item-group color="primary">
        <v-list-item
          v-for="(item, i) in items" :key="i" :to="item.link" link     >
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Модуль модератора</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
export default {
    name: 'SlidebarModerator',
    data: () => ({ drawer: null,
    items: [
        { title: "Список новостей", icon: "mdi-newspaper-variant-outline", link:"/HomePageM" },
        { title: "Добавить новость", icon: "mdi-new-box", link:"/AddNewsM" },
      ], }), 
}
</script>