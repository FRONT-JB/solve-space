'use client';

import {
  Sidebar as SidebarPrimitive,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { AlertTriangle, ChevronUp, Code2, Home } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useTheme } from 'next-themes';

import { signInWithGithub, signOut } from '../lib';
import { UserIdentity } from '@supabase/supabase-js';
import Image from 'next/image';
import { toast } from 'sonner';
import { TOAST_DURATION } from '../_constants';

// Menu items.
const items = [
  {
    title: 'Home',
    url: '/',
    icon: Home,
  },
  {
    title: 'Snippets',
    url: '/snippets',
    icon: Code2,
  },
];

interface SidebarProps {
  hasLoggedIn: boolean;
  userIdentities: UserIdentity[] | undefined;
}

export default function Sidebar({ hasLoggedIn, userIdentities = [] }: SidebarProps) {
  const { setTheme } = useTheme();

  return (
    <SidebarPrimitive>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Solve Space</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map(item => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  {hasLoggedIn && (
                    <Image
                      src={userIdentities[0]?.identity_data?.avatar_url}
                      alt="user avatar"
                      width={20}
                      height={20}
                      className="rounded-full"
                    />
                  )}

                  {hasLoggedIn
                    ? userIdentities[0]?.identity_data?.user_name
                    : '로그인이 필요합니다.'}
                  <ChevronUp className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>

              <DropdownMenuContent side="top" className="w-[--radix-popper-anchor-width]">
                <DropdownMenuItem disabled>Profile</DropdownMenuItem>

                <DropdownMenuSeparator />

                <DropdownMenuGroup>
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger>Theme</DropdownMenuSubTrigger>

                    <DropdownMenuPortal>
                      <DropdownMenuSubContent>
                        <DropdownMenuItem onClick={() => setTheme('light')}>Light</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setTheme('dark')}>Dark</DropdownMenuItem>
                      </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                  </DropdownMenuSub>
                </DropdownMenuGroup>

                <DropdownMenuSeparator />

                {hasLoggedIn && <DropdownMenuItem onClick={signOut}>Log out</DropdownMenuItem>}

                {!hasLoggedIn && (
                  <DropdownMenuItem
                    onClick={() => {
                      if (process.env.NODE_ENV === 'production') {
                        toast('로그인 기능은 현재 개발중이에요!', {
                          description: '빠르게 완성할게요!',
                          duration: TOAST_DURATION,
                          icon: <AlertTriangle className="size-5" />,
                        });

                        return;
                      }

                      signInWithGithub();
                    }}
                  >
                    Log in
                  </DropdownMenuItem>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </SidebarPrimitive>
  );
}
