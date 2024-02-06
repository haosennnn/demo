terraform {
  required_providers {
    azurerm = {
      source = "hashicorp/azurerm"
    }
  }
}

provider "azurerm" {
  features {}
}

data "azurerm_client_config" "current" {}

resource "azurerm_resource_group" "blogAppResourceGroup" {
  name     = "blog-app-rg"
  location = "East US"
}

resource "azurerm_kubernetes_cluster" "blogAppAKSCluster" {
  name                = "blog-app-aks-cluster"
  location            = azurerm_resource_group.blogAppResourceGroup.location
  resource_group_name = azurerm_resource_group.blogAppResourceGroup.name
  dns_prefix          = "blog-app-aks"

  default_node_pool {
    name       = "default"
    node_count = 1
    vm_size    = "Standard_DS2_v2"
  }

  service_principal {
    client_id     = "a09f3298-ee3f-4e69-bf7a-0150943cd63d"
    client_secret = "xL-8Q~lion7W9vbPXjzpMejS1wChDZMA_f5kMb4K"
  }
}
