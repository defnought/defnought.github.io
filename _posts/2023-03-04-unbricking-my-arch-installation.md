---
layout: post
title: Unbricking My Arch Linux Installation
tags: arch troubleshooting linux
---

Since I started using Arch Linux as my daily driver, it's been a great experience. I have experimented with desktop environments and tiling window managers. I currently use KDE Plasma as my DE and Kwin as the window manager. So far, I have bricked my installation two times. That's not so bad.

## Brick Number One

This happened late last year. My update schedule is twice weekly, on Sundays and Thursdays. For some reason, I suspended my laptop during the update process. This isn't so bad. I've done it a few times unintentionally. The process should continue after unsuspending.

What I forgot to do afterwards was to plug my laptop in. I've had my laptop for almost six years now. It's showing its age. Its battery has always been old and never been great. It allows me at most 3:45 minutes to save my work in the event of a power outage.

My laptop shut down as the kernel images were being rebuilt. Attempts to boot into Arch were met with errors. After looking up the errors and finding some answers in the Arch Linux forums, the first thing I had to do was chroot into the system using a live installation and fix it from there.

For the past two years, I've been using Rufus to create live installation media. Rufus only has Windows releases. Attempts to use Linux alternatives like BalenaEtcher would always fail; the bootloader would never recognise the live system image. It only recognised images written by Rufus.

On one of my forays into alternatives for Rufus, I encountered a `dd` command to write the system image onto a USB disk. This was the command:
{% highlight shell %}
dd if=/path/to/image of=/path/to/disk offlag=sync status=progress
{% endhighlight %}
To my surprise, this worked. Finally, I didn't have to boot into Windows just to create live installation media.

I thought that since the kernel images were the only problem, all I had to do was chroot into the system and rebuild them with:
{% highlight shell %} mkinitcpio -P {% endhighlight %}

It turned out that most of the packages that `mkinitcpio` depended on were corrupted. I couldn't use the pacman binary on the system to reinstall the packages. Fortunately, pacman has the `--sysroot` option that enables you to specify an alternative root. I could use the pacman binary on the live installation to reinstall packages on the existing system.

With pacman working, a new problem emerged. The corrupted packages' files could not be overwritten by pacman. I had to manually remove every file for each corrupted package for these packages to be succesfully reinstalled. Finally, I was able to rebuild the kernel images and successfully reboot into the system. Unbricking number one complete.

## Brick Number Two
As of mid to late last year, pacman gives more information during a system update. It tells you which services need to be restarted and recommends to reboot the system after the update. The information I've been ignoring for a few months now was the recommendation to reinstall `grub`.

As of today, I could no longer ignore that recommendation. Booting into Arch gave me the error:
> kernel does not support EFI handover

Looking up the error, I found a [thread on r/archlinux](https://redd.it/11f0vmg) the solution was to roll back the system and all affected packages to a previous date before the kernel upgrade that caused the error. I inferred that the problem was grub and the arch system as I could boot into the other OSs installed on the laptop.

This solution seemed a temporary fix and would require a change to another bootloader that didn't have such an error to make it a permanent one. I remembered that the grub binary on the EFI system parition was from the Ubuntu installation that I hadn't booted into in a long while. If I could reinstall the binary using the grub package from Arch, maybe the problem could be solved.

A quick chroot and grub reinstall later, I encounted another problem. The reinstall also included regeneration of the grub configuration file. The encryption scheme on my hard drive is LVM over LUKS and some tweaks are required to facilitate partition decryption while booting. The default grub EFI binary [does not have support for LUKS2](https://wiki.archlinux.org/title/GRUB#LUKS2) and the configuration did not have the required options that would facilitate decryption.

The solution was simple: using the old configuration, which did not require creating a custom grub EFI binary. Unbricking number two complete.
