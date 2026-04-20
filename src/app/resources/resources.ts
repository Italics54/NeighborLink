import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResourceCard } from './utils'
import { FormsModule } from '@angular/forms';
import { RoundRockresourcesCards } from '../Round Rock/roundRockResources'
import { GeorgetownResourcesCards } from '../Georgetown/GeorgetownResources';

@Component({
  selector: 'app-resources',
  standalone: true,
  templateUrl: './resources.html',
  styleUrls: ['./resources.css'],
  imports: [CommonModule, FormsModule]
})

export class Resources {

  category: string | null = null;
  selectedCard: any = null;
  resourcesCards: ResourceCard[] = this.communityResourcePack();

  communityResourcePack(): ResourceCard[] {
    const communityValue = localStorage.getItem('Community')
    if (communityValue === 'roundrock') return RoundRockresourcesCards
    if (communityValue === 'georgetown') return GeorgetownResourcesCards
    return []
  }





  filteredResources(): ResourceCard[] {
    if (!this.category) {
      return RoundRockresourcesCards;
    }
    const search = this.category.toLowerCase();
    return RoundRockresourcesCards.filter(card =>
      card.category.toLowerCase() === (search)
    );
  }

  amountOfCategory(category: string): number {
    return RoundRockresourcesCards.filter(card => card.category === category).length
  }

  getGoogleMapsUrl(): string {
    if (!this.selectedCard?.address) return 'https://www.google.com/maps';
    return 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(this.selectedCard.address);
  }

  clearFilters(): void {
    this.category = null;
  }

  openModal(card: any): void {
    this.selectedCard = card;
  }

  closeModal(): void {
    this.selectedCard = null;
  }

  pickMapIcon(card: ResourceCard): string {
    const currentCategory = card.category;
    if (currentCategory === "food") {
      return "assets/map_icons/food icon.svg"

    } else if (currentCategory === 'education') {
      return card.title.includes("Library") ? "assets/map_icons/libr icon.svg" : "assets/map_icons/edu icon.svg";

    } else if (currentCategory=== 'parks') {
      return card.title.includes('Center') ? "assets/map_icons/play icon.svg" : "assets/map_icons/play icon.svg";

    } else if (currentCategory === 'health') {
      return "assets/map_icons/heart icon.svg";

    } else if (currentCategory === 'store') {
      return "assets/map_icons/mar icon.svg";

    }

    return "assets/map_icons/bus icon.svg";;
  }

}
