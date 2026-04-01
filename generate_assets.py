"""
Asset-Generator fuer AROD Consulting Webseite.
Erstellt Hero-Bilder, Service-Icons, Projekt-Thumbnails und Infografiken.
Nur Pillow — kein externer Service noetig.
"""

import sys
import math
from pathlib import Path

try:
    from PIL import Image, ImageDraw, ImageFont, ImageFilter
except ImportError:
    print("pip install pillow")
    sys.exit(1)

OUT = Path(__file__).parent / "public" / "images"
OUT.mkdir(parents=True, exist_ok=True)

# AROD Brand Colors
GOLD = (245, 197, 0)
RED = (204, 22, 52)
NAVY = (26, 58, 140)
DARK1 = (8, 12, 20)
DARK2 = (13, 18, 32)
DARK3 = (17, 24, 39)
CARD = (26, 34, 53)
TEXT = (240, 244, 255)
MUTED = (136, 150, 168)

FONTS = [
    "C:/Windows/Fonts/arialbd.ttf",
    "C:/Windows/Fonts/calibrib.ttf",
    "C:/Windows/Fonts/segoeui.ttf",
]


def font(size):
    for fp in FONTS:
        if Path(fp).exists():
            return ImageFont.truetype(fp, size)
    return ImageFont.load_default()


def gradient_bg(w, h, c1, c2, vertical=True):
    img = Image.new("RGB", (w, h))
    draw = ImageDraw.Draw(img)
    for i in range(h if vertical else w):
        ratio = i / (h if vertical else w)
        r = int(c1[0] + (c2[0] - c1[0]) * ratio)
        g = int(c1[1] + (c2[1] - c1[1]) * ratio)
        b = int(c1[2] + (c2[2] - c1[2]) * ratio)
        if vertical:
            draw.line([(0, i), (w, i)], fill=(r, g, b))
        else:
            draw.line([(i, 0), (i, h)], fill=(r, g, b))
    return img


def draw_glow(draw, cx, cy, radius, color, alpha=60):
    for r in range(radius, 0, -2):
        a = int(alpha * (r / radius))
        c = (*color, a)
        draw.ellipse([cx - r, cy - r, cx + r, cy + r], fill=None, outline=c)


def draw_geometric_pattern(draw, w, h):
    """Subtiles geometrisches Muster im Hintergrund."""
    import random
    random.seed(42)
    for _ in range(15):
        x = random.randint(0, w)
        y = random.randint(0, h)
        size = random.randint(20, 80)
        opacity = random.randint(8, 20)
        color = (*GOLD[:3], opacity) if random.random() > 0.5 else (*NAVY[:3], opacity)
        draw.rectangle([x, y, x + size, y + size], outline=color, width=1)
    for _ in range(8):
        x = random.randint(0, w)
        y = random.randint(0, h)
        r = random.randint(10, 50)
        opacity = random.randint(5, 15)
        draw.ellipse([x - r, y - r, x + r, y + r], outline=(*GOLD[:3], opacity), width=1)


# =====================================================================
#  1. HERO BACKGROUND (1920x800)
# =====================================================================

def gen_hero():
    w, h = 1920, 800
    img = gradient_bg(w, h, DARK1, DARK2)
    draw = ImageDraw.Draw(img, "RGBA")

    # Glowing orbs
    draw.ellipse([100, 100, 500, 500], fill=None)
    glow = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    gd = ImageDraw.Draw(glow)
    gd.ellipse([50, 80, 450, 480], fill=(*GOLD, 25))
    gd.ellipse([1300, 300, 1800, 700], fill=(*RED, 18))
    gd.ellipse([800, -100, 1200, 200], fill=(*NAVY, 20))
    glow = glow.filter(ImageFilter.GaussianBlur(80))
    img.paste(Image.alpha_composite(Image.new("RGBA", (w, h), (*DARK1, 255)), glow).convert("RGB"))

    draw = ImageDraw.Draw(img)
    draw_geometric_pattern(ImageDraw.Draw(Image.new("RGBA", (w, h))), w, h)

    # Gold accent line
    draw.line([(0, h - 3), (w, h - 3)], fill=GOLD, width=3)

    img.save(OUT / "hero-bg.jpg", quality=90)
    print("hero-bg.jpg")


# =====================================================================
#  2. SERVICE ICONS (400x400 each)
# =====================================================================

def gen_service_icons():
    services = [
        ("service-business-dev", "0-100", GOLD, "Rocket"),
        ("service-digitalisierung", "KMU", NAVY, "Monitor"),
        ("service-ai-automation", "AI", RED, "CPU"),
        ("service-it-consulting", "SAP", (36, 81, 179), "Code"),
    ]

    for name, label, accent, icon_label in services:
        img = gradient_bg(400, 400, DARK2, DARK3)
        draw = ImageDraw.Draw(img, "RGBA")

        # Glowing circle
        cx, cy = 200, 170
        for r in range(120, 0, -1):
            alpha = int(40 * (r / 120))
            draw.ellipse([cx - r, cy - r, cx + r, cy + r], fill=(*accent, alpha))

        # Icon text
        f_large = font(64)
        f_small = font(28)
        draw.text((200, 155), icon_label, fill=TEXT, font=f_large, anchor="mm")

        # Label
        draw.text((200, 320), label, fill=GOLD, font=f_small, anchor="mm")

        # Gold border bottom
        draw.line([(40, 370), (360, 370)], fill=(*accent, 100), width=2)

        img.convert("RGB").save(OUT / f"{name}.jpg", quality=90)
        print(f"{name}.jpg")


# =====================================================================
#  3. PROJECT THUMBNAILS (800x500 each)
# =====================================================================

def gen_project_thumbnails():
    projects = [
        ("project-hammerpeace", "Hammerpeace Festival", "Multikulturelle Festivalserie", (34, 197, 94), "In Planung"),
        ("project-sabor", "Sabor a mi Tierra", "Latin American Catering", (245, 158, 11), "Aktiv"),
        ("project-alma-latina", "Alma Latina e.V.", "Sport & Kultur", (36, 81, 179), "Gegruendet"),
    ]

    for name, title, subtitle, accent, status in projects:
        img = gradient_bg(800, 500, DARK1, DARK3)
        draw = ImageDraw.Draw(img, "RGBA")

        # Accent glow
        glow = Image.new("RGBA", (800, 500), (0, 0, 0, 0))
        gd = ImageDraw.Draw(glow)
        gd.ellipse([500, 50, 800, 350], fill=(*accent, 30))
        glow = glow.filter(ImageFilter.GaussianBlur(60))
        img = Image.alpha_composite(Image.new("RGBA", (800, 500), (*DARK1, 255)), glow).convert("RGB")
        draw = ImageDraw.Draw(img)

        # Status badge
        f_badge = font(20)
        badge_w = 140
        draw.rounded_rectangle([30, 30, 30 + badge_w, 60], radius=12, fill=accent)
        draw.text((30 + badge_w // 2, 45), status, fill=DARK1, font=f_badge, anchor="mm")

        # Title
        f_title = font(42)
        f_sub = font(24)
        draw.text((40, 200), title, fill=TEXT, font=f_title)
        draw.text((40, 260), subtitle, fill=MUTED, font=f_sub)

        # Gold line
        draw.line([(40, 310), (300, 310)], fill=GOLD, width=3)

        # AR logo badge
        draw.rounded_rectangle([700, 420, 770, 470], radius=8, fill=GOLD)
        f_logo = font(22)
        draw.text((735, 445), "AR", fill=DARK1, font=f_logo, anchor="mm")

        img.save(OUT / f"{name}.jpg", quality=90)
        print(f"{name}.jpg")


# =====================================================================
#  4. ABOUT/PROFILE PLACEHOLDER (600x600)
# =====================================================================

def gen_profile():
    img = gradient_bg(600, 600, DARK2, DARK3)
    draw = ImageDraw.Draw(img, "RGBA")

    # Person silhouette circle
    cx, cy = 300, 250
    draw.ellipse([cx - 120, cy - 120, cx + 120, cy + 120], fill=CARD)
    draw.ellipse([cx - 40, cy - 60, cx + 40, cy - 10], fill=MUTED)  # Head
    draw.ellipse([cx - 70, cy + 10, cx + 70, cy + 90], fill=MUTED)  # Body

    # Name
    f_name = font(36)
    f_title = font(22)
    draw.text((300, 420), "Anderson Rodriguez", fill=TEXT, font=f_name, anchor="mm")
    draw.text((300, 460), "Wirtschaftsfachwirt & Fachinformatiker", fill=GOLD, font=f_title, anchor="mm")

    # Gold border
    draw.rounded_rectangle([20, 20, 580, 580], radius=16, outline=(*GOLD, 40), width=2)

    img.convert("RGB").save(OUT / "profile-anderson.jpg", quality=90)
    print("profile-anderson.jpg")


# =====================================================================
#  5. FOERDERUNG INFOGRAFIK (1200x630)
# =====================================================================

def gen_foerderung_infografik():
    w, h = 1200, 630
    img = gradient_bg(w, h, DARK1, DARK2)
    draw = ImageDraw.Draw(img, "RGBA")

    f_title = font(48)
    f_big = font(72)
    f_label = font(24)
    f_small = font(20)

    # Title
    draw.text((600, 60), "Staatliche Foerderung fuer KMU", fill=TEXT, font=f_title, anchor="mm")
    draw.line([(400, 95), (800, 95)], fill=GOLD, width=2)

    # BAFA Card
    draw.rounded_rectangle([50, 130, 570, 580], radius=16, fill=CARD)
    draw.rounded_rectangle([50, 130, 570, 190], radius=16, fill=NAVY)
    draw.text((310, 160), "BAFA Beratungsfoerderung", fill=TEXT, font=f_label, anchor="mm")
    draw.text((310, 290), "80%", fill=GOLD, font=f_big, anchor="mm")
    draw.text((310, 350), "Foerderquote", fill=MUTED, font=f_small, anchor="mm")
    draw.text((310, 410), "Max. 3.200 EUR", fill=TEXT, font=f_label, anchor="mm")
    draw.text((310, 450), "Zuschuss", fill=MUTED, font=f_small, anchor="mm")
    draw.text((310, 520), "Fuer Bestandsunternehmen", fill=MUTED, font=f_small, anchor="mm")

    # INQA Card
    draw.rounded_rectangle([630, 130, 1150, 580], radius=16, fill=CARD)
    draw.rounded_rectangle([630, 130, 1150, 190], radius=16, fill=(34, 197, 94))
    draw.text((890, 160), "INQA Coaching", fill=TEXT, font=f_label, anchor="mm")
    draw.text((890, 290), "80%", fill=GOLD, font=f_big, anchor="mm")
    draw.text((890, 350), "Foerderquote", fill=MUTED, font=f_small, anchor="mm")
    draw.text((890, 410), "12 Beratungstage", fill=TEXT, font=f_label, anchor="mm")
    draw.text((890, 450), "Nur 2.880 EUR Eigenanteil", fill=MUTED, font=f_small, anchor="mm")
    draw.text((890, 520), "Fuer KMU ab 1 Mitarbeiter", fill=MUTED, font=f_small, anchor="mm")

    # Footer
    draw.text((600, 610), "A.Rod Consulting | consulting.arod@gmail.com | Hamburg", fill=MUTED, font=f_small, anchor="mm")

    img.convert("RGB").save(OUT / "foerderung-infografik.jpg", quality=90)
    print("foerderung-infografik.jpg")


# =====================================================================
#  6. OG IMAGE / Social Share (1200x630)
# =====================================================================

def gen_og_image():
    w, h = 1200, 630
    img = gradient_bg(w, h, DARK1, DARK2)
    draw = ImageDraw.Draw(img, "RGBA")

    # Glow
    glow = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    gd = ImageDraw.Draw(glow)
    gd.ellipse([100, 100, 500, 400], fill=(*GOLD, 30))
    gd.ellipse([800, 200, 1100, 500], fill=(*RED, 20))
    glow = glow.filter(ImageFilter.GaussianBlur(80))
    img = Image.alpha_composite(Image.new("RGBA", (w, h), (*DARK1, 255)), glow).convert("RGB")
    draw = ImageDraw.Draw(img)

    f_title = font(64)
    f_sub = font(28)
    f_small = font(22)

    # Logo
    draw.rounded_rectangle([50, 50, 120, 110], radius=12, fill=GOLD)
    f_logo = font(36)
    draw.text((85, 80), "AR", fill=DARK1, font=f_logo, anchor="mm")

    draw.text((150, 70), "A.Rod Consulting", fill=TEXT, font=font(32))

    # Main text
    draw.text((100, 220), "From 0 to 100", fill=TEXT, font=f_title)
    draw.text((100, 300), "Real Quick.", fill=GOLD, font=f_title)

    draw.text((100, 400), "Business Development | IT Consulting | KI-Integration", fill=MUTED, font=f_sub)
    draw.text((100, 450), "BAFA & INQA autorisiert — bis zu 80% Foerderung", fill=MUTED, font=f_small)

    # Gold line
    draw.line([(100, 520), (600, 520)], fill=GOLD, width=3)
    draw.text((100, 545), "Hamburg | consulting.arod@gmail.com", fill=MUTED, font=f_small)

    img.save(OUT / "og-image.jpg", quality=90)
    print("og-image.jpg")


# =====================================================================
#  7. TRUST BADGES BAR (1920x100)
# =====================================================================

def gen_trust_bar():
    w, h = 1920, 100
    img = Image.new("RGB", (w, h), DARK3)
    draw = ImageDraw.Draw(img)
    f = font(22)

    badges = ["BAFA autorisiert", "INQA Coach", "SAP zertifiziert", "10+ Jahre", "Hamburg"]
    spacing = w // (len(badges) + 1)

    for i, badge in enumerate(badges):
        x = spacing * (i + 1)
        draw.rounded_rectangle([x - 80, 25, x + 80, 75], radius=20, outline=(*GOLD, 80), width=1)
        draw.text((x, 50), badge, fill=GOLD, font=f, anchor="mm")

    img.save(OUT / "trust-bar.jpg", quality=90)
    print("trust-bar.jpg")


# =====================================================================
#  MAIN
# =====================================================================

if __name__ == "__main__":
    print(f"Generiere Assets in: {OUT}\n")
    gen_hero()
    gen_service_icons()
    gen_project_thumbnails()
    gen_profile()
    gen_foerderung_infografik()
    gen_og_image()
    gen_trust_bar()
    print(f"\nFertig! {len(list(OUT.glob('*.jpg')))} Bilder generiert.")
